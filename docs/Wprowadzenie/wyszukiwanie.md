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
|- | Wpisz tekst do wyszukania |  Tutaj wpisujesz szukaną frazę, np. numer dokumentu, nazwę klienta lub tytuł. |
|- | Wyszukaj | Rozpoczyna wyszukiwanie na podstawie wprowadzonego tekstu. |
|- | Filtry | Otwiera panel filtrów zaawansowanych (np. typ dokumentu, właściciel, status, atrybuty). |

---

### Filtry wyszukiwania

Kliknięcie w ikonę **filtra z plusem** otwiera panel filtrów:

zrzut ekranu filtrów

Dostępne sekcje:

- **Właściciel** – wybór użytkownika, do którego należy dokument
- **Typ** – typ dokumentu 
- **Autoryzacje** – ograniczenia dostępowe
- **Pozostałe** – dodatkowe warunki
- **Atrybuty** – zaawansowane metadane, np. nazwa, opis

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

Pojawia się automatycznie w górnej części obszaru roboczego. Składa się z kilku ikon funkcjonalnych:

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
