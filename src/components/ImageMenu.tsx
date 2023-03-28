import { ImageList, ImageListItem } from "@mui/material";
import useDeviceSize from "../hooks/useDeviceSize";

export default function ImageMenu() {
    const { width } = useDeviceSize();
    const isMobile = width <= 500;
    
    return (
        <ImageList
            cols={1}
            gap={16}
            sx={{
                width: isMobile ? "100%" : 500,
                height: isMobile ? "100%" : 800,
            }}
            rowHeight={300}
            >
            <ImageListItem>
                <img
                alt="brew-house-menu-1"
                loading="lazy"
                src="https://i.imgur.com/YwzdWaW.jpg"
                />
            </ImageListItem>

            <ImageListItem>
                <img
                alt="brew-house-menu-2"
                loading="lazy"
                src="https://i.imgur.com/omQe1U1.jpg"
                />
            </ImageListItem>
        </ImageList>
    )
};