resource "aws_s3_bucket" "cooknest-s3" {
  bucket = var.bucket
  website {
    index_document = "index.html"
    # You can also set a custom error document if needed
    # error_document = "error.html"
  }
}

resource "aws_s3_bucket_public_access_block" "block-rules" {
  bucket = aws_s3_bucket.cooknest-s3.bucket

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_object" "entry-point" {
  bucket = aws_s3_bucket.cooknest-s3.bucket
  key    = "index.html"
  source = "${path.module}/../dist/index.html"
}

resource "aws_s3_bucket_object" "cooknest-assets" {
  for_each = fileset("${path.module}/../dist/assets", "*")

  bucket = aws_s3_bucket.cooknest-s3.bucket
  key    = each.value
  source = "${path.module}/../dist/assets/${each.value}"
}

resource "aws_s3_bucket_policy" "cn-policy" {
  bucket = aws_s3_bucket.cooknest-s3.bucket
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontAccess"
        Effect    = "Allow"
        Principal = {
          AWS = "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E1RWBSD18MLXTB" 
        }
        Action    = "s3:GetObject"
        Resource  = "arn:aws:s3:::${aws_s3_bucket.cooknest-s3.bucket}/*"
      }
    ]
  })
}
