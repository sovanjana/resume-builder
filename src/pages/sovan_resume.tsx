import React, { Fragment } from "react";
import SEO from "../components/seo";
import Resume from "../components/resume/Resume";

const ResumePage = (props: any) => {
	return (
		<Fragment>
			<SEO title='About Me (Resume)' />
			<Resume data={props.data} />
		</Fragment>
	);
};

export default ResumePage;
