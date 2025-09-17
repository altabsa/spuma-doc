---
sidebar_position: 4
id: Atrybuty
title: Atrybuty
---

# Atrybuty  

Zakładka **Atrybuty** zawiera zestaw pól opisujących dokument.  
Zakres dostępnych pól zależy od wybranej **klasy dokumentu** (ustawianej w zakładce **Ogólne**). 

## Powiązanie z SAP

Pola w zakładce **Atrybuty** są bezpośrednio powiązane z polami w systemie **SAP**.  
Oznacza to, że wartości wpisane w SPUMA mogą być później automatycznie przenoszone do SAP.

## Przykład: klasa Faktura  

Dla dokumentów typu **Faktura** pojawiają się m.in. pola związane z **Partnerem handlowym (PH)**.  

### Usuwanie wartości  

- Kliknij ikonę **X**, aby usunąć aktualnie przypisaną wartość.  

![Usuń wartość](/img/atrybuty1.png)  

### Dodawanie wartości  

1. Kliknij ikonę **podwójnego kwadratu**.  
   Otworzy się okno wyboru partnera handlowego.  

![Okno wyboru](/img/atrybuty2.png)  

2. W nowym oknie możesz:  
   - **Wyszukać istniejącego PH z SAP-a**  
     - Kliknij ikonę **lupki** – wyświetli się lista wszystkich partnerów z SAP.
 ![Lista partnerów](/img/atrybuty3.png)   
     - Możesz wpisać frazę, aby zawęzić wyniki.  
     - Po wybraniu partnera dane uzupełnią się automatycznie.  
![Dane uzupełnione](/img/atrybuty4.png)  
     - Kliknij przycisk **Wybierz** w lewym dolnym rogu.  

   - **Dodać nowego PH**  
     - Kliknij przycisk **Nowy** w prawym górnym rogu.  
     - Uzupełnij dane partnera.  
     - Kliknij **Zapisz**, a następnie **Wybierz**.
     - ⚠️Nowo dodany partner handlowy jest automatycznie zapisywany również w **SAP**.
   - **Skorzystać z przycisku Online podczas dodawania nowego PH**  
     - Wpisz numer **PESEL**.  
     - Kliknij przycisk **Online**.
     - Pozostałe pola zostaną automatycznie uzupełnione. 

4. Po wybraniu partnera pole w zakładce **Atrybuty** zostanie uzupełnione.  

---

## Zasada ogólna  

Na tej podobnej zasadzie działają także inne pola w zakładce **Atrybuty** – np. dokument bazowy czy metoda płatności.  

## Przyciski wyzwalacze  

W zakładce **Atrybuty** mogą być również dostępne dodatkowe przyciski tzw. **wyzwalacze**.  
Służą one do wykonywania akcji powiązanych z dokumentem.  

Przykład:  

- Dla dokumentu opartego na klasie **zamówienia zakupu** może pojawić się przycisk  
  **Zapisz do SAP**.  
- Kliknięcie tego przycisku powoduje automatyczne utworzenie zlecenia zakupu w systemie **SAP**.  

![Zakładka Atrybuty – dokument pusty](/img/przyklad22.png)  

Szczegółowy przykład znajdziesz w sekcji:  
[Przykład – dokument pusty](../przyklady-procesow/przyklad-dokument-pusty.md).
