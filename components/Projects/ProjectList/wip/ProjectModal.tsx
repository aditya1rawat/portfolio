import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Text,
	Button,
	Box
} from '@chakra-ui/react';

interface ProjectModalProps {
	overlay: JSX.Element;
	isOpen: Boolean;
	onClose: Function;
}

export default function ProjectModal(props: ProjectModalProps) {
	return (
		<Modal isCentered isOpen={props.isOpen} onClose={props.onClose}>
			{props.overlay}
			<ModalContent>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Box width={'500px'}>
						<Text>Custom backdrop filters!</Text>
					</Box>
				</ModalBody>
				<ModalFooter>
					<Button onClick={props.onClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
