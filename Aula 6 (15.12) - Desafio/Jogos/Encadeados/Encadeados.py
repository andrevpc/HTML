import random

print('''

$$$$$$$$\                                    $$\                           $$\                     
$$  _____|                                   $$ |                          $$ |                    
$$ |      $$$$$$$\   $$$$$$$\ $$$$$$\   $$$$$$$ | $$$$$$\   $$$$$$\   $$$$$$$ | $$$$$$\   $$$$$$$\ 
$$$$$\    $$  __$$\ $$  _____|\____$$\ $$  __$$ |$$  __$$\  \____$$\ $$  __$$ | \____$$\ $$  _____|
$$  __|   $$ |  $$ |$$ /      $$$$$$$ |$$ /  $$ |$$$$$$$$ | $$$$$$$ |$$ /  $$ | $$$$$$$ |\$$$$$$\  
$$ |      $$ |  $$ |$$ |     $$  __$$ |$$ |  $$ |$$   ____|$$  __$$ |$$ |  $$ |$$  __$$ | \____$$\ 
$$$$$$$$\ $$ |  $$ |\$$$$$$$\\$$$$$$$ |\$$$$$$$ |\$$$$$$$\ \$$$$$$$ |\$$$$$$$ |\$$$$$$$ |$$$$$$$  |
\________|\__|  \__| \_______|\_______| \_______| \_______| \_______| \_______| \_______|\_______/ 

Escreva a próxima palavra, sendo qua a primeira letra da sua, deve estar de acordo com a última letra da palavra anterior e não repetir
O objetivo é fazer um determinado número de palavras em 10 segundos
''')

listausp = []

with open("bancodepalavras.txt") as arquivo:
    for linha in arquivo:
        palavras = linha.strip().split()
        listausp.append(palavras[0])
n = random.randint(0,245365)
palavraran = (listausp[n])
print("A Primeira palavra é: ",palavraran)

listapalavras = [palavraran]
print(listapalavras)

on = 1

while on == 1:
    palavrausuario = input('''
    Escreva a próxima palavra: ''')
    for i in listapalavras:
        if palavrausuario == i:
            on = 0
    if palavrausuario in listausp and on == 1:
        listapalavras.append(palavrausuario)
        antecessor = listapalavras[len(listapalavras)-2]
        listapalavrausuario = list(palavrausuario)
        listapalavraantecessor = list(antecessor)
        if listapalavrausuario[0] != listapalavraantecessor[len(listapalavraantecessor)-1]:
                print("Você perdeu")
                break
        else:
            print("Acerto! \n")
    else:
        print("Você perdeu")
        break
            
    if len(listapalavras) == 6:
        print('''

 $$$$$$\                      $$\                           
$$  __$$\                     $$ |                          
$$ /  \__| $$$$$$\  $$$$$$$\  $$$$$$$\   $$$$$$\  $$\   $$\ 
$$ |$$$$\  \____$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |  $$ |
$$ |\_$$ | $$$$$$$ |$$ |  $$ |$$ |  $$ |$$ /  $$ |$$ |  $$ |
$$ |  $$ |$$  __$$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |
\$$$$$$  |\$$$$$$$ |$$ |  $$ |$$ |  $$ |\$$$$$$  |\$$$$$$  |
 \______/  \_______|\__|  \__|\__|  \__| \______/  \______/ 
''')
        on = 0
