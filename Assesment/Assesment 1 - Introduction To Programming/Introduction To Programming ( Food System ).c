#include<stdio.h>
void main()
{
    int quantity;
    int item;
    int option;
    char y;
    int repeat;
    int total;
    int i;
    do{
        printf("1. pizza                price:180rs/pcs\n");
        printf("2.burger                price:100rs/pcs\n");
        printf("3.dosa                  price:120rs/pcs\n");
        printf("4.idli                  price:50rs/pcs\n");
        printf("===========================================\n");

        printf("enter item:");
        scanf("%d",&item);

        switch(item)
        {
        case 1:
            printf("you have selected pizza!\n");
            printf("enter quntity:");
            scanf("%d",&quantity);
            total=total+(150*quantity);
            break;

        case 2:
            printf("you have selected burger!\n");
            printf("enter quntity:");
            scanf("%d",&quantity);
            total=total+100*quantity;
            break;
        case 3:
            printf("you have selected dosa!\n");
            printf("enter quntity:");
            scanf("%d",&quantity);
            total=total+120*quantity;
            break;
        case 4:
            printf("you have selected idli!\n");
            printf("enter quntity:");
            scanf("%d",&quantity);
            total=total+50*quantity;
            break;
        default:
            printf("please select appropriate item.\n");
            break;

        }
        printf("%d\n",total);
        printf("press 5 for another item:");
        scanf("%d",&repeat);

    }
    while(repeat==5);


}
