import { Image, Modal, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/core";

export default function ItemModal({ showModal, setModal, img }) {
  return (
    <Modal onClose={() => setModal(false)} isOpen={showModal} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Image size="100%" objectFit="cover" src={`/images/${img}`} fallbackSrc="/images/fallbackImg.png" alt="" />
      </ModalContent>
    </Modal>
  );
}
