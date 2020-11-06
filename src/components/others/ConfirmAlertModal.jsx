import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/core";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getWspUrl } from "../../helpers";
import { orderDetails, resetState } from "../../recoil/state";

function ConfirmAlertModal({ showModal, setModal }) {
  const orderData = useRecoilValue(orderDetails);
  const reset = useSetRecoilState(resetState);

  const onClose = () => {
    setModal(false);
  };

  const onConfirm = () => {
    const WSP_URL = getWspUrl(orderData);
    window.open(WSP_URL, "_blank");
    setModal(false);
    reset();
  };

  return (
    <>
      <AlertDialog onClose={onClose} isOpen={showModal}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Confim Order?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>You will be redirected to a whatsapp tab for send a message with order details</AlertDialogBody>
          <AlertDialogFooter>
            <Button variantColor="teal" ml={3} onClick={onConfirm}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ConfirmAlertModal;
