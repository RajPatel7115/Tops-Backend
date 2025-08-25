#include <stdio.h>

main() 
{
    int balance = 50000, withdraw, deposit, option;
    int flag;

    do {
        printf("\n1. Check Balance\n");
        printf("2. Withdraw\n");
        printf("3. Deposit\n");
        printf("Select option: ");
        scanf("%d", &option);

        switch (option) {
            case 1:
                printf("Your balance is %d\n", balance);
                break;

            case 2:
                printf("Enter amount for withdraw: ");
                scanf("%d", &withdraw);
                if (withdraw > balance) {
                    printf("Insufficient balance!\n");
                } else {
                    balance = balance - withdraw;
                    printf("Now your balance is %d\n", balance);
                }
                break;

            case 3:
                printf("Enter amount for deposit: ");
                scanf("%d", &deposit);
                balance = balance + deposit;
                printf("Now your balance is %d\n", balance);
                break;

            default:
                printf("Select appropriate option\n");
                break;
        }

        printf("\nPress 1 for continue: ");
        scanf("%d", &flag);

    } while (flag == 1);
}
