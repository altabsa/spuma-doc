---
sidebar_position: 4
id: Atrybuty
title: Atrybuty
---

# Atrybuty  

Zakładka **Atrybuty** zawiera zestaw pól opisujących dokument.  
Zakres dostępnych pól zależy od wybranej **klasy dokumentu** (ustawianej w zakładce **Ogólne**). 


## Przykład: **klasa Faktura**  

Dla dokumentów typu **Faktura** pojawiają się m.in. pola związane z **Partnerem handlowym (PH)**.  

### A. Atrybut – Partner handlowy (PH)  

Służy do wskazania dostawcy lub odbiorcy dokumentu.  

#### Usuwanie wartości  

- Kliknij ikonę **X**, aby usunąć aktualnie przypisaną wartość.  

![Usuń wartość](/img/atrybuty1.png)  

#### Dodawanie wartości  

1. Kliknij ikonę **podwójnego kwadratu**.  
   Otworzy się okno wyboru partnera handlowego.  

![Okno wyboru](/img/atrybuty2.png)  

2. W nowym oknie możesz:  
   - **Wyszukać istniejącego PH z SAP-a**  
     - Kliknij ikonę **lupki** – wyświetli się lista wszystkich partnerów z SAP.
 ![Lista partnerów](/img/atrybuty3.png)   
     - Wpisz frazę, aby zawęzić wyniki.  
     - Po wybraniu partnera dane uzupełnią się automatycznie.  
![Dane uzupełnione](/img/atrybuty4.png)  
     - Kliknij przycisk **Wybierz** w lewym dolnym rogu.  

   - **Dodać nowego PH**  
     - Kliknij przycisk **Nowy** w prawym górnym rogu.  
     - Uzupełnij dane partnera.  
     - Kliknij **Zapisz**, a następnie **Wybierz**.
     - ⚠️Nowo dodany partner handlowy jest automatycznie zapisywany również w **SAP**.
   - **Skorzystać z przycisku Online podczas dodawania nowego PH**  
     - Wpisz numer **NIP**.  
     - Kliknij przycisk **Online**.
     - Pozostałe pola zostaną automatycznie uzupełnione. 

4. Po wybraniu partnera pole w zakładce **Atrybuty** zostanie uzupełnione.  

---
---------------------
### B. Atrybut – Dokument bazowy  

To pole pozwala wskazać dokument, na którym opiera się bieżący dokument.  
Może to być np. **zamówienie zakupu** czy **dokument PZ**.  

1. **Kliknij** ikonę **podwójnego kwadracika** obok pola.
2. **Kliknij** ikonę lupki, żeby wyszukać dokumenty z SAP. Możesz również dopisać frazę, żeby zawęzić wyszukiwanie dokumentów.

![Lista zamówień](/img/linie11.png)  

3. **Wybierz** dokument z listy dostępnych w systemie.  

Po wskazaniu dokumentu bazowego SPUMA umożliwia później **skopiowanie danych** (np. linii, wartości lub opisów) z tego dokumentu bezpośrednio do bieżącego. Opis tej funkcji znajdziesz w sekcji:  

[**Linie dokumentu → Kopiuj z dokumentu bazowego**](../przetwarzanie-pojedynczego-dokumentu/Linie.md#kopiuj-z-dokumentu-bazowego)

---

### C. Atrybut typu „Data”  

Atrybuty typu data (np. *Data płatności*) pozwalają na szybkie wprowadzanie lub wybór daty.  

- **Kliknij ikonę kalendarza**, aby wybrać datę z listy.  
- Możesz też wpisać ją ręcznie.


:::tip[Jak szybko wpisać datę ręcznie?]
- Wpisz literę **t** i naciśnij **Tab** – system automatycznie wstawi **dzisiejszą datę**.  
- Wpisz tylko **dzień** (np. 16) i naciśnij **Tab** – system uzupełni datę o **bieżący miesiąc i rok**.  
- Wpisz **dzień i miesiąc** (np. 1608) i naciśnij **Tab** – system wstawi datę **16 sierpnia bieżącego roku**.  
- Wpisz **pełną datę** (np. 16082024) i naciśnij **Tab** – system zapisze datę **16-08-2024**.  
:::

---

### D. Atrybut Brutto / Netto  

  

---

### E. Atrybuty słownikowe (np. Metoda płatności, Waluta, Projekt, Centrum kosztów)

To atrybuty, których wartości pochodzą z **list słownikowych** pobieranych z systemu **SAP**.  

- **Wybierz wartość** z rozwijanej listy.   

⚠️ **Brak połączenia z SAP**  
Jeżeli podczas próby wyboru wartości pojawi się komunikat:

*„???”*

oznacza to, że integracja SAP jest chwilowo niedostępna i należy skontaktować się z administratorem.

---

### F. Atrybut typu „Kwota” (np. na liniach dokumentu)

Atrybuty kwotowe występujące w zakładce **Linie** dotyczą pozycji towarów lub usług.  
Możesz wprowadzać je ręcznie lub skorzystać z automatycznych operacji, które ułatwiają rozdzielanie i przeliczanie wartości.

| Sposób wprowadzenia | Opis | Przykład |
|----------------------|------|----------|
| **Wartość wpisana ręcznie** | Wpisz konkretną kwotę i **naciśnij Enter**, aby zatwierdzić. | 1120.00 |
| **Podział na X (/x)** | Wpisz kwotę, **kliknij Enter**, następnie wpisz / i liczbę pozycji, na które chcesz podzielić wartość (np. /3) i ponownie **kliknij Enter** – system doda trzy linie z równym podziałem kwoty. | /3 → kwota zostanie rozdzielona na 3 pozycje |
| **Procent wartości (x%)** | Wpisz liczbę, **kliknij Enter**, wpisz procent oraz znak % i ponownie **kliknij Enter** – system automatycznie przeliczy wartość linii według podanego procentu. | 10% → linia zostanie uzupełniona wartością 10% podanej wartości |
| **Pozycja z linii OCR (pX)** | Wpisz p i numer pozycji (np. p3) – system pobierze dane z rozpoznanej tabeli OCR z pozycji nr 3 i wypełni nimi bieżącą linię. | p3 → dane z 3. linii OCR |

------------------------
---

## Przykład: klasa **Zamówienie zakupu**

### Przyciski wyzwalacze  

W zakładce **Atrybuty** mogą być również dostępne dodatkowe przyciski tzw. **wyzwalacze**.  
Służą one do wykonywania akcji powiązanych z dokumentem.  

Przykład:  

- Dla dokumentu opartego na klasie **zamówienia zakupu** może pojawić się przycisk  
  **Zapisz do SAP**.  
- Kliknięcie tego przycisku powoduje automatyczne utworzenie zlecenia zakupu w systemie **SAP**.  

![Zakładka Atrybuty – dokument pusty](/img/przyklad22.png)  

Szczegółowy przykład znajdziesz w sekcji:  
[Przykład – dokument pusty](../przyklady-procesow/przyklad-dokument-pusty.md).
