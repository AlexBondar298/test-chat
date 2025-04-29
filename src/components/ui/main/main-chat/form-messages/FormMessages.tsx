import "./FormMessages.scss";
import { useForm } from "react-hook-form";
import Input from "../../../../shared/form/input/input";
import Button from "../../../../shared/button/button";

import { useAppDispatch, useAppSelector } from "../../../../../redux/hook";
import moment from "moment";

import SendMessageIcon from "../../../../../assets/icons/send-message.svg";
import { saveMessage } from "../../../../../redux/slices/messages/messagesListSlice";

import { nanoid } from "nanoid";

const FormMessages = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      message: "",
    },
    mode: "onBlur",
  });
  const dispatch = useAppDispatch();
  const { listUser } = useAppSelector((state) => state.user);

  const getCurrentTime = (): string => {
    const validTime: number = moment().utcOffset();
    return moment.utc().add(validTime, "minutes").format("YYYY-MM-DD HH:mm:ss");
  };

  const sendMessage = (
    message: string,
    userId: string,
    avatar: string,
    name: string
  ) => {
    dispatch(
      saveMessage({
        id: nanoid(),
        userId,
        avatar,
        name,
        message,
        time: getCurrentTime(),
      })
    );
  };

  const onSubmit = (data: { message: string }) => {
    const { id, avatar, name } = listUser[1];
    sendMessage(data.message, id, avatar, name);
    resetField("message");
    setTimeout(() => handleBotMessage(), 1000);
  };

  const handleBotMessage = () => {
    const { id, avatar, name } = listUser[0];
    sendMessage("Привіт від бота!", id, avatar, name);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__inner">
          <Input
            register={register}
            resetField={resetField}
            key="message"
            name="message"
            placeholder={"Написати повідомлення"}
            type="text"
            className=""
            errors={errors}
          />
          <Button type="submit">
            <img src={SendMessageIcon} alt="send message" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormMessages;
