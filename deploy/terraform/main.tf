terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 1.0.2"

  backend "remote" {}
}

provider "aws" {
  profile = "default"
  region  = "us-west-2"

  default_tags {
    tags = {
      Owner      = "cvanlaw/chrisvanlaw.com"
      Repository = "https://github.com/cvanlaw/chrisvanlaw.com"
    }
  }
}
