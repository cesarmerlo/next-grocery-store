import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  PseudoBox,
  Select,
  Switch,
  Text,
} from "@chakra-ui/core";

import { BiComment, BiMap, BiMapAlt, BiPhone, BiTime, BiUser } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { formState, withDelivery } from "../../recoil/state";
import ConfirmAlertModal from "../others/ConfirmAlertModal";
import { useState } from "react";
import { getFormValidations } from "../../helpers";

function CheckoutForm() {
  const setForm = useSetRecoilState(formState);
  const [delivery, setDelivery] = useRecoilState(withDelivery);
  const { register, errors, handleSubmit } = useForm({ mode: "onTouched" });
  const [showModal, setModal] = useState(false);
  const validations = getFormValidations();

  const onSubmit = (formState) => {
    setForm(formState);
    setModal(true);
  };

  return (
    <>
      <Box w={["100%", "80%", "46%", "40%"]} height="max-content" bg="white" p="4" mx="2" order={["1", "1", "0"]} mt={["6", "6", "0"]}>
        <Heading as="h3" size="md" textAlign="center">
          Your Options
        </Heading>
        <Flex as="form" p="2" direction="column" onSubmit={handleSubmit(onSubmit)}>
          <Flex justify="center" align="center" mt="6">
            <FormLabel htmlFor="delivery">With Delivery?</FormLabel>
            <Switch id="delivery" color="teal" defaultIsChecked onChange={() => setDelivery(!delivery)} />
          </Flex>

          <InputGroup mt="4">
            <InputLeftElement children={<PseudoBox as={BiUser} size="24px" color="bluex.400" />} />
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              variant="filled"
              ref={register(validations.name)}
              isInvalid={errors.name ? true : false}
            />
          </InputGroup>
          {errors.name && (
            <Text as="i" fontSize="xs" color="red.500">
              {errors.name.message}
            </Text>
          )}

          <InputGroup mt="6">
            <InputLeftElement children={<PseudoBox as={BiPhone} size="24px" color="bluex.400" />} />
            <Input
              type="phone"
              name="phone"
              placeholder="Phone Number"
              variant="filled"
              ref={register(validations.phone)}
              isInvalid={errors.phone ? true : false}
            />
          </InputGroup>
          {errors.phone && (
            <Text as="i" fontSize="xs" color="red.500">
              {errors.phone.message}
            </Text>
          )}

          {delivery && (
            <>
              <InputGroup mt="6">
                <InputLeftElement children={<PseudoBox as={BiMap} size="24px" color="bluex.400" />} />
                <Input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  variant="filled"
                  ref={register(validations.address)}
                  isInvalid={errors.address ? true : false}
                />
              </InputGroup>
              {errors.address && (
                <Text as="i" fontSize="xs" color="red.500">
                  {errors.address.message}
                </Text>
              )}

              <InputGroup mt="6">
                <InputLeftElement children={<PseudoBox as={BiMapAlt} size="24px" color="bluex.400" />} />
                <Select
                  variant="filled"
                  placeholder="-- Chose a City --"
                  pl="40px"
                  name="city"
                  ref={register(validations.city)}
                  isInvalid={errors.city ? true : false}
                >
                  <option value="option1">City 1</option>
                  <option value="option2">City 2</option>
                  <option value="option3">City 3</option>
                  <option value="option4">City 4</option>
                </Select>
              </InputGroup>
              {errors.city && (
                <Text as="i" fontSize="xs" color="red.500">
                  {errors.city.message}
                </Text>
              )}

              <InputGroup mt="6">
                <InputLeftElement children={<PseudoBox as={BiTime} size="24px" color="bluex.400" />} />
                <Select
                  variant="filled"
                  placeholder="-- Chose a Schedule --"
                  pl="40px"
                  name="schedule"
                  ref={register(validations.schedule)}
                  isInvalid={errors.schedule ? true : false}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </Select>
              </InputGroup>
              {errors.schedule && (
                <Text as="i" fontSize="xs" color="red.500">
                  {errors.schedule.message}
                </Text>
              )}
            </>
          )}

          <InputGroup mt="6">
            <InputLeftElement children={<PseudoBox as={BiComment} size="24px" color="bluex.400" />} />
            <Input
              type="text"
              name="comment"
              placeholder="Extra Comment"
              variant="filled"
              ref={register(validations.comment)}
              isInvalid={errors.comment ? true : false}
            />
          </InputGroup>
          {errors.comment && (
            <Text as="i" fontSize="xs" color="red.500">
              {errors.comment.message}
            </Text>
          )}

          <Button type="submit" w="100%" variantColor="green" size="lg" mt="6">
            CONFIRM
          </Button>
        </Flex>
      </Box>

      {showModal && <ConfirmAlertModal showModal={showModal} setModal={setModal} />}
    </>
  );
}

export default CheckoutForm;
