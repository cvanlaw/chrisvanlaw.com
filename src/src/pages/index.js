import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am experienced in leveraging agile frameworks to iteratively deliver high-quality software. 
            In search of a senior development position with a rapidly growing technology company where hard work, 
            high performance, quality- and customer-driven development consistently define success.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Director of IT & Engineering</h3>
              <div className="subheading mb-3">Pacific Medical Data Solutions, A LifePoint Health Company</div>
              <p>
              Designed, developed, and launched new SaaS product in the healthcare provider compensation space and created a technology 
              department to support the Revenue Cycle Management business of the company and establish a Software Engineering department.
              <br />● Designed and developed SaaS product using a distributed microservices architecture
              <br />● Implemented a continuous deployment pipeline using Azure Pipelines, Octopus Deploy, Helm, and Azure Kubernetes Service
              <br />● Implemented and trained team members on an Infrastructure as Code approach using Terraform
              <br />● Grew software engineering team from myself to a team of five
              <br />● Defined and implemented an SDLC
              <br />● Defined and executed a hiring plan
              <br />● Created, maintained, and executed product roadmap
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2017 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">IAM Engineer</h3>
              <div className="subheading mb-3">IDMWorks</div>
              <p>
              Provide Client with SailPoint Identity IQ implementation and development expertise using Java, Beanshell, SQL and other tools.
              <br />● Installed SailPoint Identity IQ based on client requirements
              <br />● Developed custom connector logic to tailor IIQ connectors and integrations to the needs of the client
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2016 - May 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Technical Lead</h3>
              <div className="subheading mb-3">Hosting.com</div>
              <p>
              Design and develop products which enrich our managed service offerings, while providing tools for managing infrastructure in shared, 
              dedicated, private/public VMware cloud, AWS, and Azure environments. Provide guidance regarding technical decisions and mentor 
              team members to develop skills and best practices.
              In addition to previous responsibilities:
              <br />● Mentored team members in best practices for web services, automated testing, and design patterns
              <br />● Participated in technology selection process based on software design needs
              <br />● Interviewed and assessed candidates for open positions
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2016 - September 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Hosting.com</div>
              <p>
              Design and develop managed services products to provide customers tools for managing their infrastructure in shared, dedicated, 
              cloud public and private, AWS, and Azure environments.
              <br />● Member of DevOps team responsible for deploying releases, managing build/test/deploy infrastructure as well as championing 
              continuous improvement in practices and processes
              <br />● Worked as a member of an agile team to plan current and future work and develop customer facing web applications and 
              services
              <br />● Designed and developed the following web applications to:
                <br />&nbsp;&nbsp;○ Allow customers to view monitoring data for servers, firewalls, load balancers, etc in customer portal
                <br />&nbsp;&nbsp;○ Provide easy registration for email notifications via SendGrid when certain monitoring events (e.g. CPU > 90%) occur
                <br />&nbsp;&nbsp;○ Provide self-service firewall policy and address management
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2014 - February 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Security Developer and Team Lead</h3>
              <div className="subheading mb-3">Raymond James & Associates</div>
              <p>
              Lead the IAM Services team to design, develop and deliver an in-house user provisioning system to replace legacy COTS product and 
              increase provisioning accuracy from 20% to 95%.
              <br />● Tech/Team Lead for Identity and Access Management Services. Responsible for Sprint and Release planning as well as Code 
              and Design Reviews and backlog grooming● Designed, developed, and led team to implement an automated user provisioning system to add/remove/modify permissions of 
              employees based on HR events
              <br />● Certified Scrum Master responsible for leading and improving scrum-based project processes
              <br />● Provided 24x7 on-call support for custom and COT IAM systems including Courion, SailPoint, RSA SecurID, and ClearTrust
              <br />● Assisted in implementation of SailPoint IAM solution
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2012 - July 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Security Access Analyst Level 1 & 2</h3>
              <div className="subheading mb-3">Raymond James & Associates</div>
              <p>
              Manage user permissions on a manual basis to ensure employees have appropriate system access to perform their jobs.
              <br />● Manage and audit permissions to internal applications including Active Directory, trading systems, SQL, and HP NonStop
              <br />● Work with compliance to audit and provide periodic reports on user permissions for SEC/FINRA/SOC audits
              <br />● Automate tasks with PowerShell and SQL
              <br />● Manage and annually review department process, procedure, and standards documents
              <br />● Designed and maintained Roles Based Access Controls
              <br />● Assisted in design and implementation of Raymond James integration of Courion User Provisioning
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2007 - May 2012</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Security Access Analyst Level 1 & 2</h3>
              <div className="subheading mb-3">Raymond James & Associates</div>
              <p>
              Assist QA team in performing test cases and recording/reporting their results to the implementation team to ensure successful 
              implementation of user provisioning system.
              <br />● Automated Provisioning Software Testing
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2007 - May 2012</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul >
            <li>C# (v3-9)</li>
            <li>SQL</li>
            <li>TypeScript</li>
            <li>Java</li>
            <li>HTML5</li>
            <li>Entity Framework (v4+ and Core)</li>
            <li>.NET (v3-4.8 and Core v1-5)</li>
            <li>Angular (v2-10</li>
            <li>Azure</li>
            <li>Kubernetes</li>
            <li>Helm (v2 and v3)</li>
            <li>Terraform</li>
            <li>TFS/Azure DevOps</li>
            <li>git</li>
            <li>Octopus Deploy</li>
            <li>nginx</li>
            <li>IIS</li>
          </ul>
          </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Outside of work I enjoy skiing, snowboarding, and taking my dogs to the dog park.
            I also enjoy spending time at home with my wife and daughter as well as learning to
            cook new dishes and making pizza either in the over or outside on the grill.
          </p>
        </div>
      </section>

    </div>
  </Layout>
);

export default IndexPage;
