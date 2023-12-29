import parse from 'html-react-parser';
import { COMPANY_INFORMATION, LIST_COLOR, TEMPLATE } from './contants';
import { useEffect, useMemo, useState } from 'react';
import ListClientImage from './ListClient';
import API from './services/apiService';

function App() {
	const [template, setTemplate] = useState(TEMPLATE[0]);
	const [listTemplate, setListTemplate] = useState(TEMPLATE);
	const [profile, setProfile] = useState<{avatar: string, id: string}| any>();

	useEffect(() => {
		handleGetProfile();
		handleGetTemplate();
		window.addEventListener('message', handleListenData);
		return () => {
			window.removeEventListener('message', handleListenData);
		};
	}, []);

	const handleGetProfile = () => {
		const urlSearchString = window.location.search;
		const params = new URLSearchParams(urlSearchString);
		const userId = params.get('userId');
		getProfile(userId);
	};

	const handleAddContact = () => {
		alert('Handle add contact');
	};

	const handleCall = () => {
		alert('Handle call');
	};

	const handlePostTemplate = (html: string | undefined) => {
		if (!html) return;

		API.post('https://a2ac-27-65-193-138.ngrok-free.app/api/profile-template', {
			html,
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getProfile = (id: any) => {
		API.get(`https://658bd141859b3491d3f4cdd9.mockapi.io/getProfile/${id}`)
			.then((res) => {
				setProfile(res?.data);
				console.log('profile: ', res?.data);
			})
			.catch();
	};

	const handleGetTemplate = () => {
		API.get(
			'https://carz-dev.libertycarz.com/temporary/1703738064258-6qzln0?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jYXJ6LWRldi5saWJlcnR5Y2Fyei5jb20vdGVtcG9yYXJ5LzE3MDM3MzgwNjQyNTgtNnF6bG4wKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcwMzgyNDQ2NH19fV19&Key-Pair-Id=K10XLBJ27QHL3Y&Signature=MvTRyW~GKURRUtw8DjoPxmxuaBt9ARu7bGJiFoL43YHewUF0NE9RytgjBb7DcWHl2TV3UN8ycudGBS469r1bF2jSCBrYbpOYp0CXi1xs6fCjT36wN0oqlQFU~GRGtrDPgeqfZvtmFUFV5m0gOpsmO8uQIMWjpZ4lUlQRIPqlGycJdFusoD9yIoFEIE3XH2OBjz~iQxGhatqrA0TvHQPJRSYsz9rIBzV3VQNZoPnDeFa8mXXYxt4Pv8~-LnGfUkbW3DVmy5CkLxBf4u6UZEA9mkP9vOIhdamN4eV2CRinaSeCKE1bg49a7Yw0F9jZRkAzuMB3efqpdjwlmCoULkECsw__',
		)
			.then((response) => {
				// let content = response.data.data.html;
				let content = response.data;
				// console.log(content);
				setTemplate({
					id: 1,
					content,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleUploadFile = (event: any) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			const content = e.target?.result as string;
			setListTemplate((prev) => [
				...prev,
				{
					id: prev.length,
					content: eval('`' + content.replace(/^"|"$/g, '') + '`'),
					// content,
				},
			]);
		};
		reader.readAsText(event.target.files[0]);
	};

	const handleSaveHTML = () => {
		const innerHTMLElement = document.getElementById('innerHTML');
		// handlePostTemplate(innerHTMLElement?.outerHTML);
		// const blob = new Blob(
		//   [JSON.stringify(innerHTMLElement?.outerHTML, null, 2)],
		//   { type: "application/json" }
		// );
		const blob = new Blob([innerHTMLElement?.outerHTML || ''], {
			type: 'text/html',
		});
		const a = document.createElement('a');
		a.download = 'innerHTML.html';
		a.href = URL.createObjectURL(blob);
		a.addEventListener('click', (e) => {
			setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
		});
		a.click();
	};

	const handleChangeColor = (color: string) => {
		const allElement = document.querySelectorAll('.background_query');

		if (!allElement.length) return;

		allElement.forEach((element) =>
			element.setAttribute('style', `background-color: ${color}`),
		);
	};

	const handleListenData = (e: any) => {
		const data = typeof e.data === 'object' ? e.data : JSON.parse(e.data);
		if (data.action === 'refresh') {
			handleGetProfile();
		}
	};

	const onClickEdit = () => {
		window.postMessage(JSON.stringify({ action: 'edit', data: profile }));
	};

	const constantContent = useMemo(() => {
		const information = profile
		if (!information) {
			return;
		}
		return parse(template.content, {
			replace: (domNode: any) => {
				if (domNode.attribs && domNode.attribs?.id) {
					if (Object.keys(information).includes(domNode.attribs?.id)) {
						if (domNode.attribs?.id === 'avatar') {
							domNode.attribs = {
								...domNode.attribs,
								src: information?.avatar ?? "",
							};
						} else {
							domNode.children = [
								{
									data: information[
										domNode.attribs?.id as keyof typeof information
									],
									type: 'text',
								},
							];
						}
					}
					if (Object.keys(COMPANY_INFORMATION).includes(domNode?.attribs?.id)) {
						domNode.children = [
							{
								data: COMPANY_INFORMATION[
									domNode.attribs?.id as keyof typeof COMPANY_INFORMATION
								],
								type: 'text',
							},
						];
					}
				}

				if (
					domNode.attribs &&
					domNode.attribs?.id &&
					domNode.attribs?.id === 'add_contact'
				) {
					domNode.attribs = {
						...domNode.attribs,
						onClick: handleAddContact,
					};
				}

				if (
					domNode.attribs &&
					domNode.attribs?.id &&
					domNode.attribs?.id === 'button_call'
				) {
					domNode.attribs = {
						...domNode.attribs,
						onClick: handleCall,
					};
				}

				const isMyProfile = information?.id === '1';
				if (!isMyProfile) {
					if (
						domNode.attribs &&
						domNode.attribs?.id &&
						domNode.attribs?.id === 'button_edit'
					) {
						domNode.attribs = {
							...domNode.attribs,
							hidden: true,
						};
					}
				} else {
					if (
						domNode.attribs &&
						domNode.attribs?.id &&
						domNode.attribs?.id === 'button_edit'
					) {
						domNode.attribs = {
							...domNode.attribs,
							onClick: onClickEdit,
						};
					}
				}
			},
		});
	}, [profile]);

	return (
		<div style={{ display: 'flex', justifyContent: 'space-around' }}>
			{/* <div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					gap: 40,
				}}
			>
				<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
					Template:
					{listTemplate.map((item, index) => (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: '0.5rem',
								backgroundColor: '#A7F3D0',
								width: '100px',
								height: '100px',
								fontSize: '30px',
							}}
							key={index}
							onClick={() => setTemplate(listTemplate[index])}
						>
							{index}
						</div>
					))}
				</div>
				<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
					{LIST_COLOR.map((item, index) => (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: '0.5rem',
								backgroundColor: item.color,
								width: '100px',
								height: '100px',
								fontSize: '30px',
							}}
							key={index}
							onClick={() => handleChangeColor(item.color)}
						/>
					))}
				</div>
			</div> */}
			{/* <div style={{ marginTop: '100px' }}>{parse(template.content)}</div> */}
			<div>
				{/* <div
					style={{
						display: 'flex',
						paddingTop: '1rem',
						paddingBottom: '1rem',
						gap: '1rem',
						justifyContent: 'center',
						maxWidth: '640px',
						height: '100px',
					}}
				>
					<button
						style={{
							paddingTop: '1rem',
							paddingBottom: '1rem',
							paddingLeft: '2rem',
							paddingRight: '2rem',
							borderWidth: '1px',
							backgroundColor: '#FEE2E2',
						}}
						onClick={handleSaveHTML}
					>
						Save HTML
					</button>
					<label
						htmlFor="upload-html"
						style={{
							paddingTop: '1rem',
							paddingBottom: '1rem',
							paddingLeft: '2rem',
							paddingRight: '2rem',
							borderWidth: '1px',
							backgroundColor: '#FEE2E2',
						}}
					>
						Upload HTML
					</label>
					<input
						id="upload-html"
						type="file"
						style={{ display: 'none' }}
						onChange={handleUploadFile}
					/>
				</div> */}
				<div style={{ maxHeight: '100vh' }} id="innerHTML">
					{constantContent}
				</div>
			</div>
		</div>
	);

	// return (
	// 	<div>
	// 		<button style={{ backgroundColor: '#FEE2E2' }} onClick={handleSaveHTML}>
	// 			Save HTML
	// 		</button>
	// 		<div
	// 			id="innerHTML"
	// 			style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}
	// 		>
	// 			<div>
	// 				<div style={{ position: 'relative' }}>
	// 					<img
	// 						src={
	// 							'https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D'
	// 						}
	// 						alt=""
	// 						style={{ width: '100%' }}
	// 					/>
	// 					<div
	// 						style={{
	// 							display: 'flex',
	// 							position: 'absolute',
	// 							bottom: '0',
	// 							left: '0',
	// 							paddingLeft: '1rem',
	// 							paddingRight: '1rem',
	// 							justifyContent: 'space-between',
	// 							alignItems: 'center',
	// 							width: '100%',
	// 							backgroundColor: 'rgba(0,0,0, 0.6)',
	// 							backdropFilter: 'blur(4px)',
	// 							height: '56px',
	// 						}}
	// 					>
	// 						<div style={{ display: 'flex', gap: '0.75rem' }}>
	// 							<img
	// 								src={
	// 									'https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D'
	// 								}
	// 								alt=""
	// 								style={{ width: '1.5rem', height: '1.5rem' }}
	// 							/>
	// 							<p
	// 								id="company_name"
	// 								style={{
	// 									fontSize: '1rem',
	// 									lineHeight: '1.5rem',
	// 									color: '#ffffff',
	// 								}}
	// 							>
	// 								Company name
	// 							</p>
	// 						</div>
	// 						<img
	// 							src={'svg-icons/icon-arrow-right.svg'}
	// 							alt=""
	// 							style={{ cursor: 'pointer' }}
	// 						/>
	// 					</div>
	// 				</div>
	// 				<div
	// 					className="background_query"
	// 					style={{
	// 						overflow: 'hidden',
	// 						position: 'relative',
	// 						padding: '1rem',
	// 						background: '#242424',
	// 					}}
	// 				>
	// 					<div style={{ display: 'flex', gap: '0.25rem' }}>
	// 						<img src={'svg-icons/icon-info.svg'} alt="" />
	// 						<p style={{ fontWeight: 700, color: '#ffffff' }}>Intro</p>
	// 					</div>
	// 					<p
	// 						id="company_description"
	// 						style={{ marginTop: '0.25rem', color: '#9c9c9c' }}
	// 					>
	// 						Description Company
	// 					</p>
	// 					<div
	// 						style={{
	// 							display: 'flex',
	// 							paddingTop: '1rem',
	// 							paddingBottom: '1rem',
	// 							gap: '0.75rem',
	// 						}}
	// 					>
	// 						<a
	// 							href={COMPANY_INFORMATION.FACEBOOK}
	// 							target="_blank"
	// 							rel="noreferrer"
	// 						>
	// 							<img
	// 								src={
	// 									'https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D'
	// 								}
	// 								alt=""
	// 								style={{
	// 									objectFit: 'cover',
	// 									width: '2.25rem',
	// 									height: '2.25rem',
	// 								}}
	// 							/>
	// 						</a>
	// 						<a
	// 							href={COMPANY_INFORMATION.YOUTUBE}
	// 							target="_blank"
	// 							rel="noreferrer"
	// 						>
	// 							<img
	// 								src={
	// 									'https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D'
	// 								}
	// 								alt=""
	// 								style={{
	// 									objectFit: 'cover',
	// 									width: '2.25rem',
	// 									height: '2.25rem',
	// 								}}
	// 							/>
	// 						</a>
	// 						<a
	// 							href={COMPANY_INFORMATION.LINKEDIN}
	// 							target="_blank"
	// 							rel="noreferrer"
	// 						>
	// 							<img
	// 								src={
	// 									'https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D'
	// 								}
	// 								alt=""
	// 								style={{
	// 									objectFit: 'cover',
	// 									width: '2.25rem',
	// 									height: '2.25rem',
	// 								}}
	// 							/>
	// 						</a>
	// 					</div>
	// 				</div>
	// 				<div className="background_query" style={{ background: '#0F1419' }}>
	// 					<div style={{ padding: '1rem', color: '#ffffff' }}>
	// 						<div
	// 							style={{
	// 								display: 'flex',
	// 								marginTop: '0.25rem',
	// 								gap: '0.75rem',
	// 								alignItems: 'center',
	// 							}}
	// 						>
	// 							<img
	// 								id="avatar"
	// 								src={
	// 									'https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg'
	// 								}
	// 								alt="avatar"
	// 								style={{
	// 									objectFit: 'cover',
	// 									borderRadius: '0.25rem',
	// 									width: '96px',
	// 									height: '144px',
	// 								}}
	// 							/>
	// 							<div
	// 								style={{
	// 									display: 'flex',
	// 									flexDirection: 'column',
	// 									flex: '1 1 auto',
	// 									gap: '0.25rem',
	// 								}}
	// 							>
	// 								<p
	// 									id="username"
	// 									style={{ fontSize: '1rem', lineHeight: '1.5rem' }}
	// 								>
	// 									Username
	// 								</p>
	// 								<p
	// 									id="stageName"
	// 									style={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}
	// 								>
	// 									Stagename
	// 								</p>
	// 								<div style={{ display: 'flex', gap: '0.25rem' }}>
	// 									<img src={'svg-icons/icon-bag.svg'} alt="" />
	// 									<p id="position">Postion</p>
	// 								</div>
	// 								<div
	// 									style={{
	// 										display: 'flex',
	// 										justifyContent: 'space-between',
	// 										alignItems: 'center',
	// 										width: '100%',
	// 									}}
	// 								>
	// 									<div style={{ display: 'flex', gap: '0.25rem' }}>
	// 										<img src={'svg-icons/icon-phone.svg'} alt="" />
	// 										<a id="phone" href="https://facebook.com">
	// 											Phone Number
	// 										</a>
	// 									</div>
	// 									<img
	// 										src={'svg-icons/icon-copy.svg'}
	// 										alt=""
	// 										style={{ cursor: 'pointer' }}
	// 										onClick={() => alert('phoneNumber')}
	// 									/>
	// 								</div>
	// 								<div style={{ display: 'flex', gap: '0.25rem' }}>
	// 									<img src={'svg-icons/icon-@.svg'} alt="" />
	// 									<a
	// 										id="email"
	// 										style={{ textDecoration: 'underline' }}
	// 										href="https://facebook.com"
	// 									>
	// 										Email
	// 									</a>
	// 								</div>
	// 							</div>
	// 						</div>
	// 						<div
	// 							style={{
	// 								display: 'flex',
	// 								paddingTop: '1rem',
	// 								paddingBottom: '1rem',
	// 								gap: '0.75rem',
	// 								justifyContent: 'space-between',
	// 							}}
	// 						>
	// 							<button
	// 								id="add_contact"
	// 								style={{
	// 									display: 'flex',
	// 									gap: '0.5rem',
	// 									justifyContent: 'center',
	// 									alignItems: 'center',
	// 									borderRadius: '0.25rem',
	// 									background: '#B22D1C',
	// 									width: '70%',
	// 									height: '44px',
	// 								}}
	// 								rel="noreferrer"
	// 								onClick={handleAddContact}
	// 							>
	// 								<img src={'svg-icons/icon-telegram.svg'} alt="" />
	// 								<span
	// 									style={{
	// 										fontSize: '1rem',
	// 										lineHeight: '1.5rem',
	// 										color: '#ffffff',
	// 									}}
	// 								>
	// 									Add Telegram
	// 								</span>
	// 							</button>
	// 							<button
	// 								id="button_call"
	// 								style={{
	// 									display: 'flex',
	// 									flex: '1 1 auto',
	// 									gap: '0.5rem',
	// 									justifyContent: 'center',
	// 									alignItems: 'center',
	// 									borderRadius: '0.375rem',
	// 									borderWidth: '1px',
	// 									borderColor: '#fffff',
	// 								}}
	// 								onClick={handleCall}
	// 							>
	// 								<img src={'svg-icons/icon-phone-sound.svg'} alt="" />
	// 								<span
	// 									style={{
	// 										fontSize: '1rem',
	// 										lineHeight: '1.5rem',
	// 										color: '#ffffff',
	// 									}}
	// 								>
	// 									Call
	// 								</span>
	// 							</button>
	// 						</div>
	// 						<div>
	// 							<div
	// 								style={{
	// 									display: 'flex',
	// 									gap: '0.25rem',
	// 									alignItems: 'center',
	// 								}}
	// 							>
	// 								<img src={'svg-icons/icon-address.svg'} alt="" />
	// 								<span style={{ fontWeight: 500 }}>Company Address</span>
	// 							</div>
	// 							<div
	// 								style={{
	// 									display: 'flex',
	// 									gap: '1rem',
	// 									justifyContent: 'space-between',
	// 								}}
	// 							>
	// 								<a
	// 									id="address"
	// 									href={COMPANY_INFORMATION.LINK_GOOGLE_MAP}
	// 									target="_blank"
	// 									style={{
	// 										marginTop: '0.25rem',
	// 										width: '80%',
	// 										textDecoration: 'underline',
	// 									}}
	// 									rel="noreferrer"
	// 								>
	// 									Address
	// 								</a>
	// 								<a
	// 									style={{ display: 'flex', alignItems: 'center' }}
	// 									target="_blank"
	// 									href={COMPANY_INFORMATION.LINK_GOOGLE_MAP}
	// 									rel="noreferrer"
	// 								>
	// 									<img
	// 										width={20}
	// 										height={20}
	// 										src={'svg-icons/icon-copy.svg'}
	// 										alt=""
	// 									/>
	// 								</a>
	// 							</div>
	// 						</div>
	// 						<div style={{ marginTop: '1rem' }}>
	// 							<div
	// 								style={{
	// 									display: 'flex',
	// 									gap: '0.25rem',
	// 									alignItems: 'center',
	// 								}}
	// 							>
	// 								<img src={'svg-icons/icon-hotline.svg'} alt="" />
	// 								<span style={{ fontWeight: 500 }}>Hotline</span>
	// 							</div>
	// 							<div
	// 								style={{
	// 									display: 'flex',
	// 									gap: '1rem',
	// 									justifyContent: 'space-between',
	// 								}}
	// 							>
	// 								<a id="hotline" href={'https://facebook.com'}>
	// 									Hot line
	// 								</a>
	// 								<img
	// 									src={'svg-icons/icon-phone-sound.svg'}
	// 									alt=""
	// 									style={{ cursor: 'pointer' }}
	// 									onClick={() => alert('hotline')}
	// 								/>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 			<ListClientImage />
	// 		</div>
	// 	</div>
	// );

	// return (
	//   <div>
	//     <button style={{ backgroundColor: "#FEE2E2" }} onClick={handleSaveHTML}>
	//       Save HTML
	//     </button>
	//     <div
	//       id="innerHTML"
	//       style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}
	//     >
	//       <div
	//         className="background_query"
	//         style={{
	//           display: "block",
	//           boxShadow:
	//             "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
	//         }}
	//       >
	//         <div style={{ position: "relative" }}>
	//           <img
	//             src={
	//               "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
	//             }
	//             alt=""
	//             style={{ width: "100%", height: "30vh" }}
	//           />
	//           <div
	//             style={{
	//               display: "flex",
	//               justifyContent: "center",
	//               transform: "translateY(-50%)",
	//             }}
	//           >
	//             <img
	//               id="avatar"
	//               src={
	//                 "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
	//               }
	//               alt=""
	//               style={{
	//                 objectFit: "cover",
	//                 borderRadius: "9999px",
	//                 width: "200px",
	//                 height: "200px",
	//               }}
	//             />
	//           </div>
	//           <div style={{ marginTop: "-50px", textAlign: "center" }}>
	//             <p
	//               id="username"
	//               style={{
	//                 fontSize: "1.5rem",
	//                 lineHeight: "2rem",
	//                 fontWeight: 600,
	//                 color: "#242760",
	//               }}
	//             >
	//               Username
	//             </p>
	//             <p id="position">Position</p>
	//             <p id="address">Address</p>
	//             <p id="phone">Phone</p>
	//             <p id="email">Email</p>
	//           </div>
	//           <div
	//             style={{
	//               display: "flex",
	//               marginTop: "1rem",
	//               gap: "1rem",
	//               justifyContent: "center",
	//             }}
	//           >
	//             <button
	//               id="add_contact"
	//               style={{
	//                 paddingTop: "1rem",
	//                 paddingBottom: "1rem",
	//                 paddingLeft: "3rem",
	//                 paddingRight: "3rem",
	//                 borderRadius: "1rem",
	//                 fontSize: "1.25rem",
	//                 lineHeight: "1.75rem",
	//                 color: "#ffffff",
	//                 background: "#242760",
	//               }}
	//             >
	//               Add contact
	//             </button>
	//             <button
	//               id="button_call"
	//               style={{
	//                 paddingTop: "1rem",
	//                 paddingBottom: "1rem",
	//                 paddingLeft: "3rem",
	//                 paddingRight: "3rem",
	//                 borderRadius: "1rem",
	//                 fontSize: "1.25rem",
	//                 lineHeight: "1.75rem",
	//                 color: "#ffffff",
	//                 background: "#242760",
	//               }}
	//             >
	//               Call
	//             </button>
	//           </div>
	//           <div style={{ padding: "2rem", marginTop: "1rem" }}>
	//             <p style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}>
	//               Photos:
	//             </p>
	//             <div
	//               style={{
	//                 display: "grid",
	//                 gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
	//                 marginTop: "0.5rem",
	//                 gap: "1rem",
	//               }}
	//             >
	//               {Array.from(Array(6).keys()).map((item, index) => (
	//                 <img
	//                   style={{
	//                     objectFit: "cover",
	//                     borderRadius: "0.75rem",
	//                     height: "300px",
	//                   }}
	//                   key={index}
	//                   alt=""
	//                   src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
	//                 />
	//               ))}
	//             </div>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// );
}

export default App;
