import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
	active: "overview" | "transactions" | "settings";
}

export default function Sidebar(props: SideBarProps) {
	const { active } = props;

	return (
		<section className="sidebar">
			<div className="content pt-50 pb-30 ps-30">
				<Profile />
				<div className="menus">
					<MenuItem title="Overview" icon="ic-menu-overview" active={active === "overview"} href="/member" />
					<MenuItem title="Transactions" icon="ic-menu-transaction" active={active === "transactions"} href="/member/transactions" />
					<MenuItem title="Messages" icon="ic-menu-message" href="/member" />
					<MenuItem title="Card" icon="ic-menu-card" href="/member" />
					<MenuItem title="Rewards" icon="ic-menu-reward" href="/member" />
					<MenuItem title="Settings" icon="ic-menu-setting" active={active === "settings"} href="/member/edit-profile" />
					<MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" />
				</div>
				<Footer />
			</div>
		</section>
	);
}
