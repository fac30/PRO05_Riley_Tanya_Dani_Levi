variable "ami_id" {
  default     = "ami-0acc77abdfc7ed5a6"
  description = "operating system of the instance"
}

variable "instance_type" {
  default     = "t2.micro"
  description = "Power of the proccessor within the instance"
}

variable "aws_security_group" {
  default     = "cooknest_sec"
  description = "zero trust model"
}

variable "allowed_ips" {
  description = "list of ips allowed in the server"
  type        = list(string)
  default = [
    "86.129.212.192/32",
    "212.69.43.233/32"
  ]
}

variable "availability_zone" {
  default     = "eu-west-2a"
  description = "Where is our subnets going to live amongst the AZ's"
}
