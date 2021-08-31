variable "instance_type" {
  description = "The type of instance to use."
  default = "t2.micro"
}

variable "vpc_id" {
  description = "The id of the VPC in which to place the ec2 instances."
  default = "vpc-0f0eb790401d5f8a7"
}