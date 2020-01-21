import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
import Summary from './Summary';
import { skills, companies, educations, projects, achievements, languages, interests } from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function Resume(props: any) {
	return (
		<Container className='resume' fluid>
			<Summary />

			<Row className='personal-details justify-content-between'>
				<div className='personal-detail d-flex flex-column align-items-start px-3'>
					<p>janasovan@gmail.com</p>
					<p>+91 9732510596</p>
				</div>
				<div className='personal-detail d-flex flex-column align-items-start px-3'>
					<p>www.linkedin.com/in/sovan-jana-92788b67/</p>
					<p>github.com/janasovan</p>
				</div>
				<div className='personal-detail d-flex flex-column align-items-start px-3'>
					<p>Vill.+ P.O.: Gopalpur, P.S.: Mahishadal, 721628</p>
					<p>Purba Medinipur, West Bengal, India</p>
				</div>
			</Row>

			<SectionHeader title='SKILLS' />

			<div className='skills'>
				{skills.map((skill, i) => (
					<span className='skill-chip' key={i}>
						{skill}
					</span>
				))}
			</div>

			<SectionHeader title='WORK EXPERIENCE' />

			{companies.map((company, i) => (
				<SectionDetail {...company} />
			))}

			<SectionHeader title='EDUCATION DETAILS' />

			{educations.map((edu, i) => (
				<SectionDetail {...edu} />
			))}

			<SectionHeader title='PROJECTS UNDERTAKEN' />

			{projects.map((project, i) => (
				<SectionDetail {...project} />
			))}

			<SectionHeader title='ACHIEVEMENTS' />

			<Row className='achievements'>
				<ul>
					{achievements.map((achievement, i) => (
						<li key={i}>{achievement}</li>
					))}
				</ul>
			</Row>

			<SectionHeader title='LANGUAGES' />

			<Row className='languages'>
				<ul>
					{languages.map((lang, i) => (
						<li key={i}>
							<p>
								<span>{lang.name}</span>
								{` - ${lang.cando.map(txt => txt).join(', ')}`}
							</p>
						</li>
					))}
				</ul>
			</Row>

			<SectionHeader title='INTERESTS' />

			<Row className='interests'>
				<ul>
					{interests.map((interest, i) => (
						<li key={i} style={{ whiteSpace: 'nowrap' }}>
							{interest}
						</li>
					))}
				</ul>
			</Row>
		</Container>
	);
}

function SectionDetail(props: { id: number; heading: string; subheading?: string; midsub?: string; supersub?: string; list: string[] }) {
	const { heading, subheading, midsub, supersub, list } = props;
	return (
		<Row className='sectionDetail'>
			<Col>
				{heading && <h3 className='heading'>{heading}</h3>}
				{subheading && <h5 className='subheading'>{subheading}</h5>}
				{midsub && <h6 className='midsub'>{midsub}</h6>}
				{supersub && <p className='supersub'>{supersub}</p>}
				{list && (
					<ul className='section-list'>
						{list.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				)}
			</Col>
		</Row>
	);
}

function SectionHeader(props: { title: string }) {
	return (
		<Row className='sectionHeader'>
			<h2>{props.title}</h2>
		</Row>
	);
}
