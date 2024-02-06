### Transaction history

It is necessary to create a transaction history component in the personal
account of the Internet bank.

![Preview](https://textbook.edu.goit.global/lms-react-woolf-homework/uk/img/hw-01/transactions.jpg)

The data for the list is available in JSON format in the
[`transactions.json`](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Freact-homework%2Fblob%2Fmaster%2Fhomework-01%2Ftransaction-history%2Ftransactions.json)
file. This is an array of objects, where each object describes one transaction
with the following properties:

- `id` is the unique identifier of the transaction
- `type` — transaction type
- `amount` - transaction amount
- `currency` - type of currency

##### Description of the <TransactionHistory> component

It is necessary to create a `<TransactionHistory>` component that accepts one
prop `items` – an array of transaction objects from transactions.json. The
component creates table markup. Each transaction is a table row. The example
shows the markup of two transactions.

```html
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

##### Example of use

```js
import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;
```
