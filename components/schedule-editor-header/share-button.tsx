import React from "react";
import { Box, Button, Heading, Layer, Text } from "grommet";
import { Share } from "react-feather";

class ShareButton extends React.Component {
  state = {
    open: undefined
  };

  onOpen = () => this.setState({ open: true });
  onClose = () => this.setState({ open: undefined });

  render() {
    const { open } = this.state;

    return (
      <Box>
        <Box fill align="center" justify="center">
          <Button
            primary
            color="brand-1"
            reverse
            icon={<Share color="#0F609B" />}
            label={
              <Text weight="bold" color="brand-8">
                Share
              </Text>
            }
            onClick={this.onOpen}
          />
        </Box>
        {open && (
          <Layer
            position="center"
            modal
            onClickOutside={this.onClose}
            onEsc={this.onClose}
          >
            <Box pad="medium" gap="small" width="medium">
              <Heading level="3" margin="none">
                Share
              </Heading>
              <Text>
                Sem sollicitudin facilisis sociosqu sit malesuada suscipit, ut
                vitae condimentum odio scelerisque inceptos, tempus libero
                vivamus pulvinar enim.
              </Text>
              <Box
                as="footer"
                gap="small"
                direction="row"
                align="center"
                justify="end"
                pad={{ top: "medium", bottom: "small" }}
              >
                <Button
                  label={
                    <Text color="white">
                      <strong>Share</strong>
                    </Text>
                  }
                  onClick={this.onClose}
                  primary
                  color="brand"
                />
              </Box>
            </Box>
          </Layer>
        )}
      </Box>
    );
  }
}

export default ShareButton;
