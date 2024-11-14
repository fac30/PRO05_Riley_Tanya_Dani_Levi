output "ami_id" {
  value = var.ami_id
}

output "allowed_ips" {
  value     = [for i in range(2) : var.allowed_ips[i]]
  sensitive = true
}

output "availability_zone" {
  value = var.availability_zone
}

