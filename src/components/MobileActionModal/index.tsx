import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import {
	FiEye,
	FiTrash2,
	FiMoreVertical,
	FiLayers,
	FiRepeat,
	FiEdit,
} from 'react-icons/fi';
import { MdOutlineNoteAdd } from 'react-icons/md';

interface MobileActionModalProps {
	text: string;
}

export const MobileActionModal = ({ text }: MobileActionModalProps) => {
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
	console.log(text);
	return (
		<button className='actionButton' onClick={onOpen}>
			<MdOutlineNoteAdd />
			Ações
			{text === 'Cargos' ? (
				<Modal isOpen={isOpen} onClose={onClose} isCentered size='sm'>
					<ModalOverlay />
					<ModalContent>
						<ModalBody>
							<div
								style={{
									display: 'flex',
									gap: '8px',
									alignItems: 'center',
									color: '#587169',
									cursor: 'pointer',
									padding: '8px 0',
								}}
								onClick={() => {
									router.push('/role');
								}}>
								<FiEye />
								<p>Ver Cargo</p>
							</div>
							<div
								style={{
									display: 'flex',
									gap: '8px',
									alignItems: 'center',
									marginTop: '8px',
									color: '#587169',
									opacity: 0.5,
									padding: '8px 0',
								}}>
								<FiEdit />
								<p>Editar</p>
							</div>
							<div
								style={{
									display: 'flex',
									gap: '8px',
									alignItems: 'center',
									marginTop: '8px',
									color: '#587169',
									opacity: 0.5,
									padding: '8px 0',
								}}>
								<FiLayers />
								<p>Duplicar</p>
							</div>
							<div
								style={{
									display: 'flex',
									gap: '8px',
									alignItems: 'center',
									marginTop: '8px',
									color: '#587169',
									opacity: 0.5,
									padding: '8px 0',
								}}>
								<FiRepeat />
								<p>Excluir</p>
							</div>
						</ModalBody>
					</ModalContent>
				</Modal>
			) : (
				<>
					<Modal isOpen={isOpen} onClose={onClose} isCentered size='sm'>
						<ModalOverlay />
						<ModalContent>
							<ModalBody>
								<div
									style={{
										display: 'flex',
										gap: '8px',
										alignItems: 'center',
										color: '#587169',
										cursor: 'pointer',
										padding: '8px 0',
									}}
									onClick={() => {
										router.push('/details');
									}}>
									<FiEye />
									<p>Ver Cargo</p>
								</div>
								<div
									style={{
										display: 'flex',
										gap: '8px',
										alignItems: 'center',
										marginTop: '8px',
										color: '#587169',
										opacity: 0.5,
										padding: '8px 0',
									}}>
									<FiTrash2 />
									<p>Excluir</p>
								</div>
							</ModalBody>
						</ModalContent>
					</Modal>
				</>
			)}
		</button>
	);
};
