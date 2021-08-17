data "aws_route53_zone" "chrisvanlaw_com" {
  name = "chrisvanlaw.com"
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.chrisvanlaw_com.id
  name    = "www.chrisvanlaw.com"
  type    = "A"
  ttl     = "300"
  records = ["104.131.64.169"]
}

resource "aws_route53_record" "root" {
  zone_id = data.aws_route53_zone.chrisvanlaw_com.id
  name    = ""
  type    = "A"
  ttl     = "300"
  records = ["104.131.64.169"]
}