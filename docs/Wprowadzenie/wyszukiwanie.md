---
sidebar_position: 4
id: wyszukiwanie
title: Mechanizm wyszukiwania
---

# Mechanizm wyszukiwania
System SPUMA oferuje dwa niezależne, ale uzupełniające się mechanizmy wyszukiwania:

---

## 1. Wyszukiwanie globalne w SPUMA

System SPUMA umożliwia przeszukiwanie wszystkich dokumentów i danych za pomocą **globalnego mechanizmu wyszukiwania**, dostępnego na górnym pasku menu.

---

### Gdzie znajduje się wyszukiwarka?

Wyszukiwarka globalna znajduje się **w prawym górnym rogu interfejsu**, niezależnie od miejsca, w którym jesteś. Składa się z trzech głównych elementów:

| Ikona | Funkcja | Opis |
|--------|-------|------|
| ![Wpisz-tekst-do-wyszukiwania](/img/szukaj.png) | Wpisz tekst do wyszukania |  Tutaj wpisujesz szukaną frazę, np. numer dokumentu, nazwę klienta lub tytuł. |
| ![Wyszukaj](/img/szukaj2.png) | Wyszukaj | Rozpoczyna wyszukiwanie na podstawie wprowadzonego tekstu. |
| ![filtr](/img/filtr.png) | Filtry | Otwiera panel filtrów zaawansowanych (np. typ dokumentu, właściciel, status, atrybuty). |

---

### Filtry wyszukiwania

Kliknięcie w ikonę **filtra z plusem** otwiera panel filtrów:

![filtr](/img/filtr2.png)

### Dostępne sekcje filtrów

1. **Właściciel** – wybór użytkownika, do którego należy dokument / **Typ** – typ dokumentu / **Autoryzacje** – typ autoryzacji

Wybierz oczekiwaną wartość z listy rozwijanej, następnie kliknij ikonę **„+”** aby dodać filtr (możesz dodać kilka filtrów tego samego typu – powtarzaj ten krok dla każdej wartości.), a na koniec kliknij **"Ok"**.  

![jak-korzystac](/img/Korzystanie_z_filtrow.png)

Aby usunąć pojedynczą wartość z filtru – zaznacz checkbox przy wybranym filtrze i kliknij ikonę **usuń**.

Aby usunąć wszystkie filtry z danego typu - z tego poziomu kliknij **reset**.

2. **Pozostałe** – dodatkowe warunki

Zaznacz checkbox przy interesującej opcji. W polach dat możesz wprowadzić zakres czasowy.

![jak-korzystac-pozostale](/img/wyszukiwanie_pozostale.png)
  
3. **Atrybuty** – zaawansowane metadane, np. nazwa, opis

Zaznacz checkboxy przy atrybutach, po których ma być wykonywane wyszukiwanie.

![jak-korzystac-atrybuty](/img/wyszukiwanie_atrybuty.png)

**Jak usunąć wszystkie filtry?**

Aby usunąć wszystkie filtry - kliknij **reset** z poziomu wyboru typu filtrów.

![reset-filtr](/img/reset_filtr.png)

### Jak rozpoznać czy filtr jest zastosowany?

- Aktywny filtr - ikona jest podświetlona:
  ![filtr-zastosowany](/img/filtr_zastosowany.png)
  
- Nieaktywny filtr - ikona nie jest podświetlona:

   ![filtr](/img/filtr.png)

---

### Wyniki wyszukiwania

Po kliknięciu lupki, SPUMA przeszukuje dane w całym systemie i **przenosi użytkownika do specjalnej sekcji w menu głównym**:  
**➡ `Wynik wyszukiwania`**

zrzut ekranu z wyszukiwarki

- Sekcja ta pokazuje liczbę znalezionych wyników (np. `117`).
- Kliknięcie w nią otwiera **obszar roboczy** z listą dokumentów dopasowanych do kryteriów.

## 2. Wyszukiwanie kontekstowe (obszar roboczy)

Wyszukiwanie kontekstowe to mechanizm dostępny **wewnątrz obszaru roboczego**, po wejściu do konkretnej sekcji z menu głównego (np. Repozytorium → SAP, KSEF, itp.).

---

### Gdzie znajduje się pasek wyszukiwania?

Pojawia się automatycznie w dolnej części obszaru roboczego. Składa się z kilku ikon funkcjonalnych:

| Ikona | Funkcja | Opis |
|-------|---------|------|
|- | Wyszukaj | Wprowadź słowa kluczowe, by przeszukać dokumenty tylko w bieżącej lokalizacji. |
| - | Sortowanie | Umożliwia zmianę kolejności wyników (np. alfabetycznie, po dacie, właścicielu). |
| - | Filtry | Umożliwia zaawansowane filtrowanie wyników według typu, właściciela, statusu itd. |
| - | Wyczyść filtry | Przywraca domyślne ustawienia wyszukiwania. |

---
### Filtry kontekstowe

Filtry otwierają się po kliknięciu ikony lejka. W zależności od kontekstu (repozytorium/folderu), mogą zawierać takie sekcje jak:

zrzut ekranu

- **Klasy**
- **Schemat**
- **Użytkownik**
- **Status autoryzacji**
- **Kontrahent**
---

### Wyniki kontekstowe

Po wpisaniu frazy i zatwierdzeniu (Enter lub kliknięcie lupki), wyniki pojawiają się **bezpośrednio powyżej**, w tabeli dokumentów.

- Lista wyszukiwania jest ograniczona do aktualnie otwartej sekcji (np. tylko folder `KSEF`)
- Można wykonywać dalsze operacje: edycja, podgląd, eksport itd.
---

## Kiedy używać którego?

| Cel | Wyszukiwanie globalne | Wyszukiwanie kontekstowe |
|-----|------------------------|---------------------------|
| Szukasz "czegokolwiek, gdziekolwiek" | ✅ Tak | ❌ Nie |
| Szukasz tylko w repozytorium | ❌ Nie | ✅ Tak |
| Chcesz wyszukać i od razu edytować | ✅ Tak | ✅ Tak |

Można również łączyć oba mechanizmy wyszukiwania – przykładowo: najpierw skorzystać z wyszukiwania globalnego, aby odnaleźć wszystkie dokumenty zawierające daną frazę (np. nazwę), a następnie, będąc już w wynikach, zawęzić je lokalnie za pomocą wyszukiwania kontekstowego (np. wg kontrahenta, statusu lub sortowania).

---

##  Przykład

Poniżej przedstawiono wykorzystania wyszukiwania.

---
