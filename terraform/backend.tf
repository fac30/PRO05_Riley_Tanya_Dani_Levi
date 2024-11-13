resource "aws_instance" "CookNest_instance" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = "cooknest"
  tags = {
    Name = "cooknest_instance"
  }
}


