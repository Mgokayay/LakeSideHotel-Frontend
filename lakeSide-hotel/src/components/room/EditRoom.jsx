import React, { useState } from "react";
import { getRoomById, updateRoom } from "../utils/ApiFunction";
import { useParams } from "react-router-dom";

const EditRoom = () => {
  const [room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { roomId } = useParams();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setRoom({ ...room, photo: selectedImage });
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handleRoomInputChange = (event) => {
    const { name, value } = event.target;
    setRoom({ ...room, [name]: value });

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await updateRoom(roomId, room);
        if (response.status === 200) {
          setSuccessMessage("Room updated successfully!");
          const updatedRoomData = await getRoomById(roomId);
          setRoom(updatedRoomData);
          setImagePreview(updatedRoomData.photo);
          setErrorMessage("");
        } else {
          setErrorMessage("Error updating room");
        }
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
      }
    };
  };
  return (
    <div>
      <h2>Edit Room</h2>
    </div>
  );
};

export default EditRoom;
