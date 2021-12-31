import Sidebar from "../../../components/organisms/Sidebar";
import TransactionDetailContent from "../../../components/organisms/TranscationDetailContent";

export default function Detail() {
	return (
		<section className="transactions-detail overflow-auto">
			<Sidebar active="transactions" />
			<TransactionDetailContent />
		</section>
	);
}
