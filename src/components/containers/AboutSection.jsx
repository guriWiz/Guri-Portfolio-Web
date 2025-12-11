import Image from "next/image";
import { imageLoader, shimmer, toBase64 } from "../../lib/utils";
import { motion } from "framer-motion";
import { childrenAnimation } from "../../lib/motion";
import { getInformation } from "../../fetchers";
import { useQuery } from "react-query";
import { Spinner } from "../utils";

const AboutSection = () => {
	const { data, isLoading } = useQuery("information", getInformation);

	if (isLoading)
		return (
			<div className="block py-20 text-center">
				<Spinner />
			</div>
		);

	if (!data) return null;

	return (
		<div className="gx-about-section items-center px-20">
			<div className="w-auto">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.2 }}
					variants={childrenAnimation}
					className="about-image overflow-hidden rounded-lg"
				>
					<div className="about-image-inner fiximage relative border-10 border-primary border-opacity-20" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<span className="absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerleftright rounded-full bg-gradient-to-r from-transparent to-primary"></span>
						<span className="absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate-ledgerrightleft rounded-full bg-gradient-to-r from-primary to-transparent"></span>
						<span className="absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerbottomtop rounded-full bg-gradient-to-t from-transparent to-primary"></span>
						<span className="absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate-ledgertopbottom rounded-full bg-gradient-to-b from-transparent to-primary"></span>
						{/* <Image
              loader={imageLoader}
              unoptimized={true}
              src={data.largeImage}
              height={422}
              width={660}
              layout="responsive"
              alt={data.fullName}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(660, 422)
              )}`}
            /> */}
						<div className="col-span-2 lg:col-span-1 p-10">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: 0.4 }}
								variants={childrenAnimation}
								className="about-content"
							>
								<h3 className="justify-between text-center">
									Hi, I am <span className="text-primary">{data.fullName}</span>
								</h3><br />
								<ul className="styledlist">
									{data.role && (
										<li className="text-lg">
											<strong className="inline-block min-w-[120px] font-medium">
												Role{" "}
											</strong>
											: <span className="ml-5">{data.role}</span>
										</li>
									)}
									{data.age && (
										<li className="text-lg">
											<strong className="inline-block min-w-[120px] font-medium">
												Age{" "}
											</strong>
											: <span className="ml-5">{data.age} years</span>
										</li>
									)}
									{data.nationality && (
										<li className="text-lg">
											<strong className="inline-block min-w-[120px] font-medium">
												Nationality{" "}
											</strong>
											: <span className="ml-5">{data.nationality}</span>
										</li>
									)}
									{data.address && (
										<li className="text-lg">
											<strong className="inline-block min-w-[120px] font-medium">
												Location{" "}
											</strong>
											: <span className="ml-5">{data.address}</span>
										</li>
									)}
									{/* {data.freelance && (
										<li className="text-lg">
											<strong className="inline-block min-w-[120px] font-medium">
												Freelance{" "}
											</strong>
											: <span className="ml-5">{data.freelance}</span>
										</li>
									)} */}
									{data.experience && (
										<li className="text-lg">
											<strong className="inline-block min-w-[120px] font-medium">
												Experience{" "}
											</strong>
											: <span className="ml-5">{data.experience}+ years</span>
										</li>
									)}
									{data.employment_status && (
										<li className="text-lg">
											<strong className="inline-block min-w-[120px] font-medium">
												Status{" "}
											</strong>
											: <span className="ml-5">{data.employment_status}</span>
										</li>
									)}
								</ul><br />
								<div className="justify-between text-center">
									<a href="/resume.pdf" className="btn mt-3">
										<span>Download Resume</span>
									</a>
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default AboutSection;