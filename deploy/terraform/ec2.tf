data "aws_ami" "amazon_linux" {
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm*"]
  }

  owners      = ["amazon"]
  most_recent = true
}

data "aws_subnet_ids" "subnets" {
  vpc_id = var.vpc_id
}

resource "aws_launch_template" "web-template" {
  name = "web-template"
  image_id = data.aws_ami.amazon_linux.id
  instance_type = var.instance_type

  monitoring {
    enabled = true
  }

  network_interfaces {
    associate_public_ip_address = false
  }

  user_data = filebase64("${path.module}/user-data.sh")
}

resource "aws_autoscaling_group" "web-asg" {
  desired_capacity   = 1
  max_size           = 3
  min_size           = 1

  vpc_zone_identifier = data.aws_subnet_ids.subnets.ids

  launch_template {
    id      = aws_launch_template.web-template.id
    version = "$Latest"
  }
}