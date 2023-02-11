import React, { useState } from "react";
import {
  Box,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";


export default function Landing() {
  // setting our default state and Updated state paramaters
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([])
  

  function handleSearch(event) {
    const userInput = event.target.value;
    setSearchInput(userInput);
  }
  function search(event) {
    event.preventDefault();
    console.log(searchInput);
    fetch(`/data?q=${searchInput}`)
      .then(response => response.json())
      .then(data => setData(data))
      .then(error => console.log(error));
  }

  return (
    <>
      <div id="sidebar">
        <h1 className="headClass" l>
          Strainabase
        </h1>
        <div>
          <form id="search-form" role="search" onSubmit={search}>
            <Input
              w={{ sm: "75%", md: "50%", lg: "50%" }}
              className="inputStyle"
              id="input"
              aria-label="Search strain"
              placeholder="Search"
              type="search"
              name="input"
              onChange={handleSearch}
            />
            <Button colorScheme="teal" size="md" type="submit">
              Search
            </Button>
          </form>
        </div>
        <Box width="100%">
          <Card
            className="wrappa"
            direction={{ base: "column", sm: "" }}
            overflow="hidden"
            variant="outline"
          >
            <nav>
              {data.map((item) => (
                <div className="eachCard">
                  <Image
                    className="imgStyle"
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={item.imageLink}
                    alt="Caffe Latte"
                  />

                  <Stack boxShadow="xl" p="6" rounded="md" bg="white">
                    <CardBody>
                      <Heading size="md">
                      {item.StrainName}
    
                      </Heading>
                      <Text py="2">{item.Description}</Text>
                    </CardBody>

                    <CardFooter>
                      <Button
                        className="btnFriend"
                        variant="solid"
                        colorScheme="blue"
                      >
                        {item.type}
                      </Button>
                    </CardFooter>
                  </Stack>
                  <h3>
                    <p></p>
                  </h3>
                </div>
              ))}
            </nav>
            
          </Card>
        </Box>
      
      </div>
      <div id="detail"></div>
    </>
  );
}

