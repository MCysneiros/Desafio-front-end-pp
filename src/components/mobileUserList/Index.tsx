import { MobileContainers } from './style';
import {
	FiMoreVertical,
	FiChevronDown,
	FiRefreshCcw,
	FiChevronUp,
} from 'react-icons/fi';
import { MdOutlineNoteAdd } from 'react-icons/md';
import SearchBar from '../SearchBar/index';
import { useEffect, useState } from 'react';
import { list, useDisclosure } from '@chakra-ui/react';
import TableAvatar from '../UserList/TableAvatar';
import Active from '../Active/Index';
import { MobileModal } from '../MenuModal/Index';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { MobileActionModal } from '../MobileActionModal/index';

interface Item {
	agent_id: number;
	name: string;
	branch: string;
	department: string;
	image: string;
	role: string;
	status: string;
	phone?: { ddd: string; ddi: string; number: string };
	birth_date?: string;
	document?: { type: string; number: string };
	email?: string;
}

interface MobileUserListProps {
	text: string;
	agents: Item[];
}

export const MobileUserList = ({ text, agents }: MobileUserListProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(6);
	const [rolesPerPage, setRolesPerPage] = useState(6);
	const [activeIndex, setActiveIndex] = useState(null);

	const [contentType, setContentType] = useState('');

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastItem - itemsPerPage;
	const currentItems = agents.slice(indexOfFirstPost, indexOfLastItem);

	const onModalSelect = (text: string) => {
		setContentType(text);
	};

	const onTItleClick = index => {
		setActiveIndex(index);
	};

	console.log(contentType);
	const router = useRouter();

	const [roles, setRoles] = useState([]);
	useEffect(() => {
		const getRolesData = async () => {
			const response = await api.get('/roles');

			console.log(response.data.roles);
			setRoles(response.data.roles);
		};
		getRolesData();
	}, []);

	const { onOpen } = useDisclosure();
	const currentRoles = roles.slice(indexOfFirstPost, indexOfLastItem);
	const rolesMobileList = currentRoles.map((role, index) => {
		const isActive = index === activeIndex ? 'active' : '';

		return (
			<li className='renderedList' key={index}>
				<div className={`listItem ${isActive}`}>
					<p className='ListText'>Cargo</p>
					<div className='listDisplay'>
						<span className='roleSpan'>{role.name}</span>

						{isActive ? (
							<FiChevronUp onClick={() => setActiveIndex(null)} />
						) : (
							<FiChevronDown onClick={() => onTItleClick(index)} />
						)}
					</div>

					{isActive && (
						<>
							<div className='listGrid'>
								<div className='listGridItem '>
									<p>Departamento</p>
									<span>{role.departament}</span>
								</div>

								<div className='listGridItem'>
									<p>Colaboradores</p>
									<span>{role.agents_quantity}</span>
								</div>
							</div>

							<MobileActionModal text={contentType} />
						</>
					)}
				</div>
			</li>
		);
	});

	const userMobileList = currentItems.map((agent, index) => {
		const isOpaque = agent.status === 'active' ? 'opaque' : '';
		const isActive = index === activeIndex ? 'active' : '';

		return (
			<li className='renderedList' key={agent.agent_id}>
				<div className={`listItem ${isActive}`}>
					<p className='ListText'>Nome completo</p>
					<div className='listDisplay'>
						<TableAvatar name={agent.name} src={agent.image} />
						{isActive ? (
							<FiChevronUp onClick={() => setActiveIndex(null)} />
						) : (
							<FiChevronDown onClick={() => onTItleClick(index)} />
						)}
					</div>

					{isActive && (
						<>
							<div className='listGrid'>
								<div className='listGridItem '>
									<p>Departamento</p>
									<span>{agent.department}</span>
								</div>
								<div className='listGridItem'>
									<p>Cargo</p>
									<span>{agent.role}</span>
								</div>
								<div className='listGridItem'>
									<p>Unidade</p>
									<span>1234546789</span>
								</div>
								<div className='listGridItem'>
									<p>Unidade</p>
									<span>{agent.branch}</span>
								</div>
								<div className='listGridItem'>
									<p>Status</p>
									<Active status={agent.status} />
								</div>
							</div>

							<MobileActionModal text={contentType} />
						</>
					)}
				</div>
			</li>
		);
	});

	return (
		<MobileContainers>
			<div className='topSection'>
				<MobileModal onModalSelect={onModalSelect} />
				<SearchBar searchText='nome ou CPF' />
			</div>
			<div>
				<ul>
					{contentType === ('Colaboradores' || '')
						? userMobileList
						: rolesMobileList}
				</ul>
			</div>

			<button
				className='loadMoreButton'
				onClick={e => setItemsPerPage(agents.length)}>
				<FiRefreshCcw />
				Carregar mais
			</button>
		</MobileContainers>
	);
};
