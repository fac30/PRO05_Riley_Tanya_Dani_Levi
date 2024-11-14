output "ami_id" {
  value = var.ami_id
}

output "security" {
  value = [for i in range(2) : var.allowed_ips[i]]
  sensitive = true
}

