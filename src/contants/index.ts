export const CONSTANT = {};

export function getIcon(name: string) {
	return new URL(`./assets/images/${name}`, import.meta.url).href;
}

export function getImageUrl(name: string) {
	return new URL(`./assets/images/${name}`, import.meta.url).href;
}

export const information = {
	id: 1,
	avatar:
		'https://i.pinimg.com/736x/54/07/04/540704aa5aca64eff249701949ff6b29.jpg',
	username: 'Maria Shizuka',
	stageName: 'Maria',
	position: 'Business Analyst',
	phone: '+83 09578287',
	email: 'yennhinguyen2k@influnencer.com',
	telegram: 'https://www.facebook.com/dvnrapier.vu01',
	address: '125/90/6 Le Thi Hong, Go Vap, Ho Chi Minh, VietNam.',
};

export const COMPANY_INFORMATION = {
	company_name: 'Influence',
	company_description:
		'Influence is a system of media networks and agencies offering a premium suite of marketing services. Founded in 2023, we offer comprehensive marketing strategies and creative solutions for businesses and organizations to succeed in the digital world.',
	hotline: '(+855) 67 74 00 00',
	FACEBOOK: 'https://www.facebook.com/InFluenceAgencyOfficial',
	LINKEDIN: 'https://www.linkedin.com/company/influencecambodia/',
	YOUTUBE: 'https://www.youtube.com/@InfluenceAgencyKH',
	LINK_GOOGLE_MAP: 'https://maps.app.goo.gl/RwzoLS4F9iQ7izdJ6',
};

export const TEMPLATE = [
	{
		id: 1,
		// content: "<div id=\"innerHTML\" style=\"max-width: 640px; margin-left: auto; margin-right: auto;\"><div><div style=\"position: relative;\"><img src=\"https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D\" alt=\"\" style=\"width: 100%;\"><div style=\"display: flex; position: absolute; bottom: 0px; left: 0px; padding-left: 1rem; padding-right: 1rem; justify-content: space-between; align-items: center; width: 100%; background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px); height: 56px;\"><div style=\"display: flex; gap: 0.75rem;\"><img src=\"https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D\" alt=\"\" style=\"width: 1.5rem; height: 1.5rem;\"><p id=\"company_name\" style=\"font-size: 1rem; line-height: 1.5rem; color: rgb(255, 255, 255);\">Company name</p></div><img src=\"svg-icons/icon-arrow-right.svg\" alt=\"\" style=\"cursor: pointer;\"></div></div><div style=\"overflow: hidden; position: relative; padding: 1rem; background: rgb(36, 36, 36);\"><div style=\"display: flex; gap: 0.25rem;\"><img src=\"svg-icons/icon-info.svg\" alt=\"\"><p style=\"font-weight: 700; color: rgb(255, 255, 255);\">Intro</p></div><p id=\"company_description\" style=\"margin-top: 0.25rem; color: rgb(156, 156, 156);\">Description Company</p><div style=\"display: flex; padding-top: 1rem; padding-bottom: 1rem; gap: 0.75rem;\"><a href=\"https://www.facebook.com/InFluenceAgencyOfficial\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D\" alt=\"\" style=\"object-fit: cover; width: 2.25rem; height: 2.25rem;\"></a><a href=\"https://www.youtube.com/@InfluenceAgencyKH\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D\" alt=\"\" style=\"object-fit: cover; width: 2.25rem; height: 2.25rem;\"></a><a href=\"https://www.linkedin.com/company/influencecambodia/\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D\" alt=\"\" style=\"object-fit: cover; width: 2.25rem; height: 2.25rem;\"></a></div></div><div style=\"background: rgb(15, 20, 25);\"><div style=\"padding: 1rem; color: rgb(255, 255, 255);\"><div style=\"display: flex; margin-top: 0.25rem; gap: 0.75rem; align-items: center;\"><img id=\"avatar\" src=\"https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg\" alt=\"avatar\" style=\"object-fit: cover; border-radius: 0.25rem; width: 96px; height: 144px;\"><div style=\"display: flex; flex-direction: column; flex: 1 1 auto; gap: 0.25rem;\"><p id=\"username\" style=\"font-size: 1rem; line-height: 1.5rem;\">Username</p><p id=\"stageName\" style=\"font-size: 0.875rem; line-height: 1.25rem;\">Stagename</p><div style=\"display: flex; gap: 0.25rem;\"><img src=\"svg-icons/icon-bag.svg\" alt=\"\"><p id=\"position\">Postion</p></div><div style=\"display: flex; justify-content: space-between; align-items: center; width: 100%;\"><div style=\"display: flex; gap: 0.25rem;\"><img src=\"svg-icons/icon-phone.svg\" alt=\"\"><a id=\"phone\" href=\"https://facebook.com\">Phone Number</a></div><img src=\"svg-icons/icon-copy.svg\" alt=\"\" style=\"cursor: pointer;\"></div><div style=\"display: flex; gap: 0.25rem;\"><img src=\"svg-icons/icon-@.svg\" alt=\"\"><a id=\"email\" href=\"https://facebook.com\" style=\"text-decoration: underline;\">Email</a></div></div></div><div style=\"display: flex; padding-top: 1rem; padding-bottom: 1rem; gap: 0.75rem; justify-content: space-between;\"><button id=\"add_contact\" rel=\"noreferrer\" style=\"display: flex; gap: 0.5rem; justify-content: center; align-items: center; border-radius: 0.25rem; background: rgb(178, 45, 28); width: 70%; height: 44px;\"><img src=\"svg-icons/icon-telegram.svg\" alt=\"\"><span style=\"font-size: 1rem; line-height: 1.5rem; color: rgb(255, 255, 255);\">Add Telegram</span></button><button id=\"button_call\" style=\"display: flex; flex: 1 1 auto; gap: 0.5rem; justify-content: center; align-items: center; border-radius: 0.375rem; border-width: 1px;\"><img src=\"svg-icons/icon-phone-sound.svg\" alt=\"\"><span style=\"font-size: 1rem; line-height: 1.5rem; color: rgb(255, 255, 255);\">Call</span></button></div><div><div style=\"display: flex; gap: 0.25rem; align-items: center;\"><img src=\"svg-icons/icon-address.svg\" alt=\"\"><span style=\"font-weight: 500;\">Company Address</span></div><div style=\"display: flex; gap: 1rem; justify-content: space-between;\"><a id=\"address\" href=\"https://maps.app.goo.gl/RwzoLS4F9iQ7izdJ6\" target=\"_blank\" rel=\"noreferrer\" style=\"margin-top: 0.25rem; width: 80%; text-decoration: underline;\">Address</a><a target=\"_blank\" href=\"https://maps.app.goo.gl/RwzoLS4F9iQ7izdJ6\" rel=\"noreferrer\" style=\"display: flex; align-items: center;\"><img width=\"20\" height=\"20\" src=\"svg-icons/icon-copy.svg\" alt=\"\"></a></div></div><div style=\"margin-top: 1rem;\"><div style=\"display: flex; gap: 0.25rem; align-items: center;\"><img src=\"svg-icons/icon-hotline.svg\" alt=\"\"><span style=\"font-weight: 500;\">Hotline</span></div><div style=\"display: flex; gap: 1rem; justify-content: space-between;\"><a id=\"hotline\" href=\"https://facebook.com\">Hot line</a><img src=\"svg-icons/icon-phone-sound.svg\" alt=\"\" style=\"cursor: pointer;\"></div></div></div></div></div><div style=\"background-color: rgb(255, 255, 255);\"><div style=\"display: flex; padding: 1rem; justify-content: space-between; color: rgb(255, 255, 255); background: rgb(178, 45, 28);\"><p style=\"font-size: 1rem; line-height: 1.5rem; font-weight: 700;\">Our Clients</p><a href=\"https://theinfluence.ai/work/\" target=\"_blank\" rel=\"noreferrer\" style=\"font-size: 0.875rem; line-height: 1.25rem;\">See All</a></div><div><div style=\"display: flex;\"><img src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" alt=\"client-1\" style=\"width: 50%;\"><img src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" alt=\"client-2\" style=\"width: 50%;\"></div><div style=\"display: flex;\"><img src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" alt=\"client-3\" style=\"width: 60%;\"><img src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" alt=\"client-4\" style=\"aspect-ratio: 1 / 1; width: 40%;\"></div><div style=\"display: flex;\"><img src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" alt=\"client-5\" style=\"width: 50%;\"><img src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" alt=\"client-6\" style=\"width: 50%;\"></div></div></div></div>",
		content: `<div
    id="innerHTML"
    style="max-width: 640px; margin-left: auto; margin-right: auto"
  >
    <div>
      <div style="position: relative">
        <img
          src="https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          style="width: 100%"
        />
        <div 
          onClick="onClickEdit"
          id="button_edit"
          style="
            position: absolute; 
            top: 0;
            right: 0;
            background-color: lightblue;
            border-radius: 16px;
            padding: 8px 16px;
            margin: 16px;
          "
        >
          Edit
        </div>
        <div
          style="
            display: flex;
            position: absolute;
            bottom: 0px;
            left: 0px;
            padding-left: 1rem;
            padding-right: 1rem;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
            height: 56px;
            box-sizing: border-box;
          "
        >
          <div style="display: flex; gap: 0.75rem; align-items: center">
            <img
              src="https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              style="width: 1.5rem; height: 1.5rem"
            />
            <p
              id="company_name"
              style="
                font-size: 1rem;
                line-height: 1.5rem;
                color: rgb(255, 255, 255);
              "
            >
              Company name
            </p>
          </div>
          <img
            src="svg-icons/icon-arrow-right.svg"
            alt=""
            style="cursor: pointer"
          />
        </div>
      </div>
      <div
        class="background_query"
        style="
          overflow: hidden;
          position: relative;
          padding: 1rem;
          background: rgb(36, 36, 36);
        "
      >
        <div style="display: flex; gap: 0.25rem">
          <img src="svg-icons/icon-info.svg" alt="" />
          <p style="font-weight: 700; color: rgb(255, 255, 255)">Intro</p>
        </div>
        <p
          id="company_description"
          style="margin-top: 0.25rem; color: rgb(156, 156, 156)"
        >
          Description Company
        </p>
        <div
          style="
            display: flex;
            padding-top: 1rem;
            padding-bottom: 1rem;
            gap: 0.75rem;
          "
        >
          <a
            href="https://www.facebook.com/InFluenceAgencyOfficial"
            target="_blank"
            rel="noreferrer"
            ><img
              src="https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              style="
                object-fit: cover;
                width: 2.25rem;
                height: 2.25rem;
              " /></a
          ><a
            href="https://www.youtube.com/@InfluenceAgencyKH"
            target="_blank"
            rel="noreferrer"
            ><img
              src="https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              style="
                object-fit: cover;
                width: 2.25rem;
                height: 2.25rem;
              " /></a
          ><a
            href="https://www.linkedin.com/company/influencecambodia/"
            target="_blank"
            rel="noreferrer"
            ><img
              src="https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              style="object-fit: cover; width: 2.25rem; height: 2.25rem"
          /></a>
        </div>
      </div>
      <div class="background_query" style="background: rgb(15, 20, 25)">
        <div style="padding: 1rem; color: rgb(255, 255, 255)">
          <div
            style="
              display: flex;
              margin-top: 0.25rem;
              gap: 0.75rem;
              align-items: center;
            "
          >
            <img
              id="avatar"
              src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg"
              alt="avatar"
              style="
                object-fit: cover;
                border-radius: 0.25rem;
                width: 96px;
                height: 144px;
              "
            />
            <div
              style="
                display: flex;
                flex-direction: column;
                flex: 1 1 auto;
                gap: 0.25rem;
              "
            >
              <p id="username" style="font-size: 1rem; line-height: 1.5rem">
                Username
              </p>
              <p
                id="stageName"
                style="font-size: 0.875rem; line-height: 1.25rem"
              >
                Stagename
              </p>
              <div style="display: flex; gap: 0.25rem">
                <img src="svg-icons/icon-bag.svg" alt="" />
                <p id="position">Postion</p>
              </div>
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  width: 100%;
                "
              >
                <div style="display: flex; gap: 0.25rem">
                  <img src="svg-icons/icon-phone.svg" alt="" /><a
                    id="phone"
                    href="https://facebook.com"
                    >Phone Number</a
                  >
                </div>
                <img
                  src="svg-icons/icon-copy.svg"
                  alt=""
                  style="cursor: pointer"
                />
              </div>
              <div style="display: flex; gap: 0.25rem">
                <img src="svg-icons/icon-@.svg" alt="" /><a
                  id="email"
                  href="https://facebook.com"
                  style="text-decoration: underline"
                  >Email</a
                >
              </div>
            </div>
          </div>
          <div
            style="
              display: flex;
              padding-top: 1rem;
              padding-bottom: 1rem;
              gap: 0.75rem;
              justify-content: space-between;
            "
          >
            <button
              id="add_contact"
              rel="noreferrer"
              style="
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                align-items: center;
                border-radius: 0.25rem;
                background: rgb(178, 45, 28);
                width: 70%;
                height: 44px;
              "
            >
              <img src="svg-icons/icon-telegram.svg" alt="" /><span
                style="
                  font-size: 1rem;
                  line-height: 1.5rem;
                  color: rgb(255, 255, 255);
                "
                >Add Telegram</span
              ></button
            ><button
              id="button_call"
              style="
                display: flex;
                flex: 1 1 auto;
                gap: 0.5rem;
                justify-content: center;
                align-items: center;
                border-radius: 0.375rem;
                border-width: 1px;
              "
            >
              <img src="svg-icons/icon-phone-sound.svg" alt="" /><span
                style="
                  font-size: 1rem;
                  line-height: 1.5rem;
                  color: rgb(255, 255, 255);
                "
                >Call</span
              >
            </button>
          </div>
          <div>
            <div style="display: flex; gap: 0.25rem; align-items: center">
              <img src="svg-icons/icon-address.svg" alt="" /><span
                style="font-weight: 500"
                >Company Address</span
              >
            </div>
            <div
              style="
                display: flex;
                gap: 1rem;
                justify-content: space-between;
              "
            >
              <a
                id="address"
                href="https://maps.app.goo.gl/RwzoLS4F9iQ7izdJ6"
                target="_blank"
                rel="noreferrer"
                style="
                  margin-top: 0.25rem;
                  width: 80%;
                  text-decoration: underline;
                "
                >Address</a
              ><a
                target="_blank"
                href="https://maps.app.goo.gl/RwzoLS4F9iQ7izdJ6"
                rel="noreferrer"
                style="display: flex; align-items: center"
                ><img
                  width="20"
                  height="20"
                  src="svg-icons/icon-copy.svg"
                  alt=""
              /></a>
            </div>
          </div>
          <div style="margin-top: 1rem">
            <div style="display: flex; gap: 0.25rem; align-items: center">
              <img src="svg-icons/icon-hotline.svg" alt="" /><span
                style="font-weight: 500"
                >Hotline</span
              >
            </div>
            <div
              style="
                display: flex;
                gap: 1rem;
                justify-content: space-between;
              "
            >
              <a id="hotline" href="https://facebook.com">Hot line</a
              ><img
                src="svg-icons/icon-phone-sound.svg"
                alt=""
                style="cursor: pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color: rgb(255, 255, 255)">
      <div
        style="
          display: flex;
          padding: 1rem;
          justify-content: space-between;
          color: rgb(255, 255, 255);
          background: rgb(178, 45, 28);
        "
      >
        <p style="font-size: 1rem; line-height: 1.5rem; font-weight: 700">
          Our Clients
        </p>
        <a
          href="https://theinfluence.ai/work/"
          target="_blank"
          rel="noreferrer"
          style="font-size: 0.875rem; line-height: 1.25rem"
          >See All</a
        >
      </div>
      <div>
        <div style="display: flex">
          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            alt="client-1"
            style="width: 50%"
          /><img
            src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            alt="client-2"
            style="width: 50%"
          />
        </div>
        <div style="display: flex">
          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            alt="client-3"
            style="width: 60%"
          /><img
            src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            alt="client-4"
            style="aspect-ratio: 1 / 1; width: 40%"
          />
        </div>
        <div style="display: flex">
          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            alt="client-5"
            style="width: 50%"
          /><img
            src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            alt="client-6"
            style="width: 50%"
          />
        </div>
      </div>
    </div>
  </div>`,
	},
	{
		id: 2,
		// content: "<div id=\"innerHTML\" style=\"max-width: 640px; margin-left: auto; margin-right: auto;\"><div style=\"display: block; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\"><div style=\"position: relative;\"><img src=\"https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D\" alt=\"\" style=\"width: 100%; height: 30vh;\"><div style=\"display: flex; justify-content: center; transform: translateY(-50%);\"><img id=\"avatar\" src=\"https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D\" alt=\"\" style=\"object-fit: cover; border-radius: 9999px; width: 200px; height: 200px;\"></div><div style=\"margin-top: -50px; text-align: center;\"><p id=\"username\" style=\"font-size: 1.5rem; line-height: 2rem; font-weight: 600; color: rgb(36, 39, 96);\">Username</p><p id=\"position\">Position</p><p id=\"address\">Address</p><p id=\"phone\">Phone</p><p id=\"email\">Email</p></div><div style=\"display: flex; margin-top: 1rem; gap: 1rem; justify-content: center;\"><button id=\"add_contact\" style=\"padding: 1rem 3rem; border-radius: 1rem; font-size: 1.25rem; line-height: 1.75rem; color: rgb(255, 255, 255); background: rgb(36, 39, 96);\">Add contact</button><button id=\"button_call\" style=\"padding: 1rem 3rem; border-radius: 1rem; font-size: 1.25rem; line-height: 1.75rem; color: rgb(255, 255, 255); background: rgb(36, 39, 96);\">Call</button></div><div style=\"padding: 2rem; margin-top: 1rem;\"><p style=\"font-size: 1.125rem; line-height: 1.75rem;\">Photos:</p><div style=\"display: grid; grid-template-columns: repeat(3, minmax(0px, 1fr)); margin-top: 0.5rem; gap: 1rem;\"><img alt=\"\" src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" style=\"object-fit: cover; border-radius: 0.75rem; height: 300px;\"><img alt=\"\" src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" style=\"object-fit: cover; border-radius: 0.75rem; height: 300px;\"><img alt=\"\" src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" style=\"object-fit: cover; border-radius: 0.75rem; height: 300px;\"><img alt=\"\" src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" style=\"object-fit: cover; border-radius: 0.75rem; height: 300px;\"><img alt=\"\" src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" style=\"object-fit: cover; border-radius: 0.75rem; height: 300px;\"><img alt=\"\" src=\"https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg\" style=\"object-fit: cover; border-radius: 0.75rem; height: 300px;\"></div></div></div></div></div>",
		content: `<div id="innerHTML" style="max-width: 640px; margin-left: auto; margin-right: auto;"><div class="background_query" style="display: block; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"><div style="position: relative;"><img src="https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D" alt="" style="width: 100%; height: 30vh;"><div style="display: flex; justify-content: center; transform: translateY(-50%);"><img id="avatar" src="https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D" alt="" style="object-fit: cover; border-radius: 9999px; width: 200px; height: 200px;"></div><div style="margin-top: -50px; text-align: center;"><p id="username" style="font-size: 1.5rem; line-height: 2rem; font-weight: 600; color: rgb(36, 39, 96);">Username</p><p id="position">Position</p><p id="address">Address</p><p id="phone">Phone</p><p id="email">Email</p></div><div style="display: flex; margin-top: 1rem; gap: 1rem; justify-content: center;"><button id="add_contact" style="padding: 1rem 3rem; border-radius: 1rem; font-size: 1.25rem; line-height: 1.75rem; color: rgb(255, 255, 255); background: rgb(36, 39, 96);">Add contact</button><button id="button_call" style="padding: 1rem 3rem; border-radius: 1rem; font-size: 1.25rem; line-height: 1.75rem; color: rgb(255, 255, 255); background: rgb(36, 39, 96);">Call</button></div><div style="padding: 2rem; margin-top: 1rem;"><p style="font-size: 1.125rem; line-height: 1.75rem;">Photos:</p><div style="display: grid; grid-template-columns: repeat(3, minmax(0px, 1fr)); margin-top: 0.5rem; gap: 1rem;"><img alt="" src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg" style="object-fit: cover; border-radius: 0.75rem; height: 300px;"><img alt="" src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg" style="object-fit: cover; border-radius: 0.75rem; height: 300px;"><img alt="" src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg" style="object-fit: cover; border-radius: 0.75rem; height: 300px;"><img alt="" src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg" style="object-fit: cover; border-radius: 0.75rem; height: 300px;"><img alt="" src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg" style="object-fit: cover; border-radius: 0.75rem; height: 300px;"><img alt="" src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg" style="object-fit: cover; border-radius: 0.75rem; height: 300px;"></div></div></div></div></div>`,
	},
];

export const LIST_COLOR = [
	{
		id: 1,
		color: 'CornflowerBlue',
	},
	{
		id: 2,
		color: 'DarkSeaGreen',
	},
	{
		id: 3,
		color: 'Tomato',
	},
];
// ------------------- Template 1 -----------------------------------

// return (
//   <div className="max-w-[640px] mx-auto">
//     <div className={"shadow-md block"}>
//       <div className="relative">
//         <img
//           src={
//             "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
//           }
//           alt=""
//           className="w-full"
//         />
//         <div className="absolute h-[56px] w-full bottom-0 left-0 flex justify-between items-center px-4 backdrop-blur-sm bg-black bg-opacity-60">
//           <div className="flex gap-3">
//             <img
//               src={
//                 "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
//               }
//               alt=""
//               className="w-6 h-6"
//             />
//             <p id="company_name" className="font-[700] text-base text-white">Company name</p>
//           </div>
//           <img
//             src={getIcon("icon-arrow-right.svg")}
//             alt=""
//             className="cursor-pointer"
//           />
//         </div>
//       </div>
//       <div
//         className={`shadow-[0_4px_0px_rgba(0,0,0,0.25)] bg-[#242424] p-4 relative overflow-hidden`}
//       >
//         <div className="flex gap-1">
//           <img src={getIcon("icon-info.svg")} alt="" />
//           <p className="text-white font-bold">Intro</p>
//         </div>
//         <p id="company_description" className="text-[#9c9c9c] mt-1 ">Description Company</p>
//         <div className="flex gap-3 py-4">
//           <a
//             href={COMPANY_INFORMATION.FACEBOOK}
//             target="_blank"
//             rel="noreferrer"
//           >ư
//             <img
//               src={
//                 "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
//               }
//               alt=""
//               className="w-9 h-9 object-cover"
//             />
//           </a>
//           <a
//             href={COMPANY_INFORMATION.YOUTUBE}
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img
//               src={
//                 "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
//               }
//               alt=""
//               className="w-9 h-9 object-cover"
//             />
//           </a>
//           <a
//             href={COMPANY_INFORMATION.LINKEDIN}
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img
//               src={
//                 "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
//               }
//               alt=""
//               className="w-9 h-9 object-cover"
//             />
//           </a>
//         </div>
//       </div>
//       <div className="bg-[#0F1419]">
//         <div className="p-4 text-white">
//           <div className="flex items-center gap-3 mt-1">
//             <img
//               id="avatar"
//               src={
//                 "https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg"
//               }
//               alt="avatar"
//               className="w-[96px] h-[144px] object-cover rounded"
//             />
//             <div className="flex flex-col gap-1 flex-auto">
//               <p id="username" className="font-[700] text-base">
//                 Username
//               </p>
//               <p id="stageName" className="text-sm">
//                 Stagename
//               </p>
//               <div className="flex gap-1">
//                 <img src={getIcon("icon-bag.svg")} alt="" />
//                 <p id="position">Postion</p>
//               </div>
//               <div className="flex items-center justify-between w-full">
//                 <div className="flex gap-1">
//                   <img src={getIcon("icon-phone.svg")} alt="" />
//                   <a id="phone" href="#">
//                     Phone Number
//                   </a>
//                 </div>
//                 <img
//                   src={getIcon("icon-copy.svg")}
//                   alt=""
//                   className="cursor-pointer"
//                   onClick={() => alert("phoneNumber")}
//                 />
//               </div>
//               <div className="flex gap-1">
//                 <img src={getIcon("icon-@.svg")} alt="" />
//                 <a id="email" className="underline" href="#">
//                   Email
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="py-4 flex gap-3 justify-between">
//             <button
//               id="add_contact"
//               className="bg-[#B22D1C] flex justify-center items-center gap-2 w-[70%] h-[44px] rounded"
//               rel="noreferrer"
//               onClick={handleAddContact}
//             >
//               <img src={getIcon("icon-telegram.svg")} alt="" />
//               <span className="text-base leading-none text-white">
//                 Add Telegram
//               </span>
//             </button>
//             <button
//                id="button_call"
//               className="border border-[#fffff] flex justify-center items-center rounded-md flex-auto gap-2"
//               onClick={handleCall}
//             >
//               <img src={getIcon("icon-phone-sound.svg")} alt="" />
//               <span className="text-base leading-none text-white">Call</span>
//             </button>
//           </div>

//           <div>
//             <div className="flex gap-1 items-center">
//               <img src={getIcon("icon-address.svg")} alt="" />
//               <span className="font-[500]">Company Address</span>
//             </div>
//             <div className="flex justify-between gap-4">
//               <a
//                 id="address"
//                 href={COMPANY_INFORMATION.LINK_GOOGLE_MAP}
//                 target="_blank"
//                 className="underline mt-1 w-4/5"
//                 rel="noreferrer"
//               >
//                 Address
//               </a>
//               <a
//                 className="flex items-center"
//                 target="_blank"
//                 href={COMPANY_INFORMATION.LINK_GOOGLE_MAP}
//                 rel="noreferrer"
//               >
//                 <img
//                   width={20}
//                   height={20}
//                   src={getIcon("icon-copy.svg")}
//                   alt=""
//                 />
//               </a>
//             </div>
//           </div>
//           <div className="mt-4">
//             <div className="flex gap-1 items-center">
//               <img src={getImageUrl("icon-hotline.svg")} alt="" />
//               <span className="font-[500]">Hotline</span>
//             </div>
//             <div className="flex justify-between gap-4">
//               <a id="hotline" href={""}>
//                 Hot line
//               </a>
//               <img
//                 src={getImageUrl("icon-copy.svg")}
//                 alt=""
//                 className="cursor-pointer"
//                 onClick={() => alert("hotline")}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <ListClientImage />
//   </div>
// );

// -----------Template 2 ------------------

// return (
//   <div>
//     <button className="bg-red-100" onClick={handleSaveHTML}>
//       Save HTML
//     </button>
//     <div id="innerHTML" className="max-w-[640px] mx-auto">
//       <div className={"shadow-md block"}>
//         <div className="relative">
//           <img
//             src={
//               "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
//             }
//             alt=""
//             className="w-full h-[30vh]"
//           />
//           <div className="flex justify-center translate-y-[-50%]">
//             <img
//               id="avatar"
//               src={
//                 "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
//               }
//               alt=""
//               className="w-[200px] h-[200px] rounded-full object-cover"
//             />
//           </div>
//           <div className="text-center mt-[-50px] space-y-4">
//             <p
//               id="username"
//               className="text-2xl text-[#242760] font-semibold"
//             >
//               Username
//             </p>
//             <p id="position">Position</p>
//             <p id="address">Address</p>
//             <p id="phone">Phone</p>
//             <p id="email">Email</p>
//           </div>
//           <div className="flex gap-4 justify-center mt-4">
//             <button
//               id="add_contact"
//               className="px-12 py-4 bg-[#242760] rounded-2xl text-white text-xl"
//             >
//               Add contact
//             </button>
//             <button
//               id="button_call"
//               className="px-12 py-4 bg-[#242760] rounded-2xl text-white text-xl"
//             >
//               Call
//             </button>
//           </div>
//           <div className="p-8 mt-4">
//             <p className="text-lg">Photos:</p>
//             <div className="grid grid-cols-3 gap-4 mt-2">
//               {Array.from(Array(6).keys()).map((item, index) => (
//                 <img
//                   className="rounded-xl h-[300px] object-cover"
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
