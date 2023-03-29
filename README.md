# Fixed-Interest NFT Lending

This project demonstrates the use of Superfluid as a sublayer that powers financial applications. The protocol allows a user to deposit an NFT as collateral and borrow DAI against it.

The `borrow` function generates a stream from the borrower to the contract, which pays interest on the loan. The flow rate is determined based on the APR specified in the contract and the loan amount. For instance, if a user takes out a 100 DAI loan at an APR of 10%, a stream of 10 DAI/year is created from the borrower to the NFT Lending contract.

In addition, if the user repays half of the loan, the `repay` function updates the stream downwards. Finally, if the user repays the entire loan, the payment stream is canceled.

If the user attempts to cancel the stream by themselves, liquidations are also carried out. This involves seizing the NFT and transferring it to an NFTChest owned by the NFT Lending contract, which acts as a safe place.

## Demo Video: https://clipchamp.com/watch/8aEzGCSBs1A
