# Desafio 2 - lig - 4 
import os

def tabuleiro(j):
    print("          Jogador x" if j == "o" else "          Jogador o")
    print('  1  ','2  ','3  ','4  ','5  ','6  ','7')
    for i in linhas:
        for j in i:
            print('| ',j,end='')
        print("|")

def jogada(jogador):    
    x = int(input("Escolha a coluna: "))
    if linhas[0][x-1] == " ":
        for i in range(5,-1,-1):                
            if linhas[i][x-1] == ' ':
                linhas[i][x-1] = jogador
                break
    else:
        print("Coluna já preenchido! Escolha outra")
        jogada(jogador)
        
def vitoria():
    for i in linhas:
        for j in range(4):
            if i[j+0] == i[j+1] == i[j+2] == i[j+3] != " ":
                return 1  

    for j in range(7):
        for i in range(3):
            if linhas[i][j] == linhas[i+1][j] == linhas[i+2][j] == linhas[i+3][j] != " ":
                return 1

    for j in range(4):
        for i in range(3):
            if linhas[i][j] == linhas[i+1][j+1] == linhas[i+2][j+2] == linhas[i+3][j+3] != " ":
                return 1
        
    for j in range(4):
        for i in range(3):
            if linhas[5-i][j] == linhas[4-i][j+1] == linhas[3-i][j+2] == linhas[2-i][j+3] != " ":
                return 1
            
print('''
      _               _     
 ___/__) ,           /   / 
(, /        _   __  /___/_ 
  /    _(_ (_/_        /   
 (_____   .-/         /    
         (_/               ''')
        
lin1= [' ',' ',' ',' ',' ',' ',' ']
lin2= [' ',' ',' ',' ',' ',' ',' ']
lin3= [' ',' ',' ',' ',' ',' ',' ']
lin4= [' ',' ',' ',' ',' ',' ',' ']
lin5= [' ',' ',' ',' ',' ',' ',' ']
lin6= [' ',' ',' ',' ',' ',' ',' ']

linhas = [lin1,lin2,lin3,lin4,lin5,lin6]
j = "x"

tabuleiro(j)

while 1:
    if j == "o":
        j="x"
    else:
        j="o"
    
    jogada(j)
    print("\n"*os.get_terminal_size().lines)
    tabuleiro(j)
    if vitoria() == 1:
        print("Jogador x ganhou" if (j=="x") else "Jogador o ganhou")
        break
