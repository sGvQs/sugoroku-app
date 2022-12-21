import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '../../common/Button';
import React from 'react';

type SelectionDialogProps = {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SelectionDialog: React.FC<SelectionDialogProps> = ({
  modalState,
  setModalState,
}) => {
  return (
    <Dialog
      open={modalState}
      onClose={() => setModalState((c) => !c)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        このゲームは心理ゲームです
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <li>ふたりで遊ぶゲームです</li>
          <li>キャラクターごとに特徴があります</li>
          <li>選んだら端末を渡してください</li>
          <li>
            警告：プレイヤー間で仲悪くなっても一切の責任を負いません、うまく自分たちで落とし所をつけてください
          </li>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClickHandler={() => setModalState((c) => !c)}
          label={'始める'}
        ></Button>
      </DialogActions>
    </Dialog>
  );
};
