resource "aws_security_group" "db_security" {
  name        = var.aws_db_security
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
resource "aws_instance" "db_instance" {
  ami           = var.ami_id
  instance_type = var.instance_type
  security_groups = [aws_security_group.db_security.name]
  key_name = "db_instance_key"

  lifecycle {
    prevent_destroy = true
    }

  tags = {
    Name = "db_instance"
  }
}
