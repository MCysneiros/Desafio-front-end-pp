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

import { FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';

export const UserListModal = () => {
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<FiMoreVertical onClick={onOpen} />
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
		</>
	);
};
