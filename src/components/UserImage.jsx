import { Box } from "@mui/material";


const UserImage = ({ image, size = "60px" }) => {
    return (
        <Box width={size} height={size}>
            <img alt="user"
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width={size}
                height={size}
                src={`https://skypearl-social-server.vercel.app/assets/${image}`}
            />
        </Box>
    );
};

export default UserImage;