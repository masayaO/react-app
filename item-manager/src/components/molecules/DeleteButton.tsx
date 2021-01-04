import React, { FC } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const DeleteButton: FC<{ handleDelete: () => void }> = ({ handleDelete }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Modal
      size="small"
      open={isOpen}
      trigger={<Button circular color="black" icon="trash" />}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content="Delete Item" />
      <Modal.Content>
        <p>この操作は元に戻せません。</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>
          <Icon name="remove" /> Cancel
        </Button>
        <Button
          color="red"
          onClick={() => {
            handleDelete();
            setOpen(false);
          }}
        >
          <Icon name="trash" /> Delete
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteButton;
