import React from "react";
import { Image, Text, ActionButton } from "../atoms";
import { Icon } from "../molecules";
import { LocationSearch } from "../organisms";
import "./CardPet.css";

function MapMarkerCard({
  title,
  description,
  image,
  children,
}) {

  return (
    <div className="card">

      {image && (
        <div className="card-image">
          <Image src={image} alt={title} />
        </div>
      )}

      <div className="card-header">
        <Text variant="h3">{title}</Text>
      </div>

      {description && (
        <Text className="card-description">
          {description}
        </Text>
      )}

      <div className="card-body">
        {children}
      </div>

    </div>
  );
}