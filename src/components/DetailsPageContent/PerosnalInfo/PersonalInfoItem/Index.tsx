import { FiPhoneCall, FiCalendar } from 'react-icons/fi';
import { BiIdCard } from 'react-icons/bi';
import { Container } from './Style';

interface PersonalItemProps {
	text: string;
	data?: string;
	date?: string;
}

export default function PersonalInfoItem({
	data,
	text,
	date,
}: PersonalItemProps) {
	return (
		<Container>
			<div className='infoCardContainer'>
				<div className='infoCardIcon'>
					{text === 'CPF' ? (
						<BiIdCard />
					) : text === 'Telefone' ? (
						<FiPhoneCall />
					) : (
						<FiCalendar />
					)}
				</div>
				<div className='infoCardText'>
					<span>{text}</span>

					{data ? (
						<p>{data}</p>
					) : (
						<p>
							{new Date(date).toLocaleDateString('pt-br', {
								day: '2-digit',
								month: 'numeric',
								year: 'numeric',
							})}
						</p>
					)}
				</div>
			</div>
		</Container>
	);
}
