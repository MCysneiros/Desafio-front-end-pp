import { useState } from 'react';
import { MobileContainers } from './style';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
} from '@chakra-ui/react';

import { FiMoreVertical } from 'react-icons/fi';

interface MobileModalProps {
	onModalSelect: (text: string) => void;
}

export const MobileModal = ({ onModalSelect }: MobileModalProps) => {
	const [active, setActive] = useState('');

	const text = active === 'Colaboradores' ? '' : 'Cargos';

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<MobileContainers>
			<>
				<div className='topModal'>
					<p>{text ? 'Cargos' : 'Colaboradores'}</p>
					<FiMoreVertical onClick={onOpen} />
				</div>

				<Modal isOpen={isOpen} onClose={onClose} isCentered size='sm'>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Categoria</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<div className='modalText'>
								<p
									onClick={() => {
										setActive('Colaboradores');
										onModalSelect('Colaboradores');
										onClose();
									}}
									style={{
										color: '#587169',
										padding: '0 16px',
										display: 'block',
										marginBottom: '8px',
									}}>
									Colaboradores
								</p>
								<p
									onClick={() => {
										setActive('Cargos');
										onClose();
										onModalSelect('Cargos');
									}}
									style={{
										color: '#587169',
										padding: '0 16px',
										display: 'block',
										marginBottom: '8px',
									}}>
									Cargos
								</p>
							</div>
						</ModalBody>
					</ModalContent>
				</Modal>
			</>
		</MobileContainers>
	);
};
