resource "aws_vpc" "cooknest_vpc" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.cooknest_vpc.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = var.availability_zone
  map_public_ip_on_launch = false
}

resource "aws_security_group" "cooknest_sec" {
  name        = var.aws_security_group
  description = "zero trust model"
  vpc_id      = aws_vpc.cooknest_vpc.id


  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [for i in range(2) : var.allowed_ips[i]]
  }


  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = [for i in range(2) : var.allowed_ips[i]]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = [for i in range(2) : var.allowed_ips[i]]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
resource "aws_instance" "CookNest_instance" {
  ami           = var.ami_id
  instance_type = var.instance_type
  subnet_id     = aws_subnet.public.id

  # Use security_group_ids instead of security_groups
  vpc_security_group_ids = [aws_security_group.cooknest_sec.id]

  tags = {
    Name = "cooknest_instance"
  }
}