
board = [[[],[],[]],[[],[],[]],[[],[],[]]]

print(board[0])
print(board[1])
print(board[2])
player1 = 'X'
player2 = 'Y'
player = True
# row = input('What row do you want')
# col = input('What colume do you want')


def _move(board,player):
    row = int(input('What row do you want'))
    col = int(input('What colume do you want'))
    board[col][row] = player
    return board


while player == True:
    result = _move(board, player1)
    for A in range(len(board)):
        # print(_move(board,player1)[A])
        ##result = _move(board,player1)
        print(result[A])
        # print(board[A]) 
        # print(range(len(board)))
        # print('working')
    player = False
else:
    for A in range(len(board)):
        print(_move(board,player2)[A])
    player = True