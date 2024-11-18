resource "aws_security_group" "cooknest_sec" {
  name        = var.aws_security_group
  description = "zero trust model"


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
  security_groups = [aws_security_group.cooknest_sec.name]
  key_name = "cooknest2"


  tags = {
    Name = "cooknest_instance"
  }
}
