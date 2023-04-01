import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CardMedia,
  Box,
  Divider,
} from "@mui/material";

function PlayerCard({ player }) {
  const { Id, PFName, Skill, Value, UpComingMatchesList } = player;

  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await import(`./player-images/${Id}.jpg`); // change relative path to suit your needs
      setImage(response.default);
    };

    fetchImage();
  }, [Id]);

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia component="img" height="100%" image={image} alt={PFName} />

        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Name - {PFName}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" color="text.secondary">
              Skill - {Skill}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price - $ {Value}
            </Typography>
          </Box>
          <Divider sx={{ marginY: "5px" }} />

          <Typography variant="body1" color="text.secondary">
            Upcoming Match:
          </Typography>
          {UpComingMatchesList.map((match) => (
            <Box
              key={match.TID}
              display="flex"
              justifyContent="space-between"
              marginY="5px"
            >
              <Typography variant="body2" color="text.secondary">
                {match.CCode} Vs {match.VsCCode}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(match.MDate).toLocaleDateString()}
              </Typography>
            </Box>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PlayerCard;
