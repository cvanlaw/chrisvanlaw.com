#!/usr/bin/env bash
sudo yum update -y
sudo yum -y install docker
sudo systemctl start docker
sudo systemctl enable --now docker

sudo usermod -a -G docker ec2-user

docker run -p 80:80 --pull cvanlaw/chrisvanlawcom:latest