"use client";
import React from "react";
import Image from "next/image";
import projectsData from "@/app/utils/projectsData";

// export async function generateStaticParams() {
//   const projects = {...projectsData};
//   console.log(projects);
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// };

// export async function getStaticProps({ params}) {
//   const { slug } = params;
//   const res = await fetch(`http://localhost:3000/api/projects/${slug}`);
//   const data = await res.json();
//   const project = data[0];
//   return {
//     props: {
//       project,
//     },
//   };
// };

const SingleProjectPage = ({ params }) => {
  const project = projectsData.find(
    (project) => project.name === params.singleProject
  );
  console.log(project);

  // const { slug } = params;
  // console.log(params);
  return (
    <div>
      <div>
        <div>
          <Image src={project.image} alt={project.imageData.alt} width={400} height={400}/>
        </div>
        <div>
          <h2>{project.title}</h2>
          {/* <div> {params.singleProject}</div> */}
          <div> {project.team}</div>
          <div> {project.description}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;

// "use client";
// import React from "react";

// const TuffSkin = () => {
//   return (
//     <div>
//       <div>
//         <h2>TuffSkin</h2>
//         <p> Project </p>
//         <p> Webfluent</p>
//         <p> 2021</p>
//         <p> 3 languages</p>
//         <p> 6 Packages </p>
//       </div>
//       <div>
//         <p> text 1</p>
//         <p> text 1</p>
//         <p> text 1</p>
//         <p> text 1</p>
//         <p> text 1</p>
//         <p> text 1</p>
//         <p> text 1</p>
//       </div>
//     </div>
//   );
// };

// export default TuffSkin;
