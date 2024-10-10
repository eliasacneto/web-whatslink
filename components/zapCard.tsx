"use client";

import { use, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Bold,
  Code2,
  Copy,
  Eraser,
  Italic,
  List,
  Quote,
  Strikethrough,
} from "lucide-react";
import Swal from "sweetalert2";
import { useTranslations } from "next-intl";

interface CountryOption {
  code: string;
  name: string;
  flag: string;
}

export function ZapCard() {
  const t: (key: string) => string = useTranslations("zapCard");
  const c: (key: string) => string = useTranslations("countries");

  const countryOptions: CountryOption[] = [
    { code: "55", name: c("BR"), flag: "🇧🇷" },
    { code: "1", name: c("US"), flag: "🇺🇸" },
    { code: "44", name: c("UK"), flag: "🇬🇧" },
    { code: "49", name: c("DE"), flag: "🇩🇪" },
    { code: "34", name: c("ES"), flag: "🇪🇸" },
    { code: "351", name: c("PT"), flag: "🇵🇹" },
    { code: "353", name: c("IE"), flag: "🇮🇪" },
  ];

  const [countryCode, setCountryCode] = useState(countryOptions[0]);

  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [message, setMessage] = useState<string>("");
  const [previewMessage, setPreviewMessage] = useState<string>("");
  let timerInterval: NodeJS.Timeout;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = e.target.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    setWhatsappNumber(formattedValue);
  };

  const updatePreview = () => {
    const formattedMessage = message
      .replace(/\*(.*?)\*/g, "<b>$1</b>")
      .replace(/_(.*?)_/g, "<i>$1</i>")
      .replace(/~(.*?)~/g, "<s>$1</s>")
      .replace(/`(.*?)`/g, "<code>$1</code>")
      .replace(/^- (.*)$/gm, "<li>$1</li>")
      .replace(/^> (.*)$/gm, "<q>$1</q>")
      .replace(/\n/g, "<br />");

    setPreviewMessage(formattedMessage);
  };

  const clearFields = () => {
    Swal.fire({
      text: "Limpando os campos!",
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getHtmlContainer()?.querySelector("b");
        timerInterval = setInterval(() => {
          if (timer) {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      setCountryCode({ code: "55", name: "Brasil", flag: "🇧🇷" });
      setWhatsappNumber("");
      setMessage("");
      setPreviewMessage("");
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  const applyFormat = (prefix: string, suffix: string) => {
    const textarea = document.getElementById(
      "messageTextarea"
    ) as HTMLTextAreaElement;

    if (!textarea) return;

    const { selectionStart, selectionEnd } = textarea;

    const textBefore = message.substring(0, selectionStart);
    const selectedText = message.substring(selectionStart, selectionEnd);
    const textAfter = message.substring(selectionEnd, message.length);

    const newMessage = textBefore + prefix + selectedText + suffix + textAfter;

    setMessage(newMessage);
    updatePreview();

    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd =
        selectionStart + prefix.length + selectedText.length + suffix.length;
      textarea.focus();
    }, 0);
  };

  useEffect(() => {
    updatePreview();
  }, [message]);

  const generateLink = () => {
    if (message != "" && whatsappNumber != "") {
      const encodedMessage = encodeURIComponent(message);
      const link = `https://wa.me/${countryCode.code.replace(
        "+",
        ""
      )}${whatsappNumber}?text=${encodedMessage}`;

      navigator.clipboard
        .writeText(link)
        .then(() => {
          Swal.fire({
            text: "Seu link copiado para a área de transferência!",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Abrir no WhatsApp",
            confirmButtonColor: "#22C55E",
            cancelButtonColor: "#94a3b8",
            cancelButtonText: "Fechar",
          }).then((result) => {
            if (result.isConfirmed) {
              window.open(link, "_blank");
            }
          });
        })
        .catch((err) => {
          console.error("Erro ao copiar o link: ", err);
        });
    } else {
      Swal.fire({
        title: "Ops!",
        text: "Verifique se todos os campos foram preenchidos!",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#16a34a",
      });
      //   alert("Preencha todos os campos!");
    }
  };

  useEffect(() => {}, []);

  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center mt-20 mb-20"
      id="whatslink"
    >
      <div className="flex w-[90%] lg:w-[800px] h-fit ">
        <div className="rounded-lg border bg-card text-card-foreground  w-full lg:mx-6 shadow-lg ">
          <div className="flex flex-col space-y-1.5 p-6 text-center">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-center mt-3 mb-3">
              {t("title")}{" "}
              <span
                className="underline underline-offset-3 font-semibold"
                style={{
                  textDecorationColor: "#4ade80",
                  textDecorationThickness: "2px",
                }}
              >
                WhatsLink
              </span>
            </h3>
            <p className="text-base text-muted-foreground ">{t("subtitle")}</p>
            <p className="text-red-400 font-semibold antialiased text-[12px]">
              {t("requiredFields")}
            </p>
          </div>
          <div className=" p-6 pt-0 flex flex-col lg:flex-row gap-10">
            <form className="lg:w-1/2">
              <div className="grid w-full items-center gap-2">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="whatsappNumber"
                    className="text-base font-medium mb-2 text-gray-800"
                  >
                    {t("number")}
                    <span className="font-bold text-red-300">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Select
                      value={countryCode.code}
                      onValueChange={(value) => {
                        const selectedCountry = countryOptions.find(
                          (country) => country.code === value
                        );
                        setCountryCode(
                          selectedCountry || { code: "", name: "", flag: "" }
                        );
                      }}
                    >
                      <SelectTrigger
                        className="text-base w-fit gap-2"
                        id="countryCode"
                      >
                        <SelectValue className="text-base">
                          {countryCode.flag}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {countryOptions.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.flag} {country.name} (+{country.code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      id="whatsappNumber"
                      placeholder="(00) 0 0000-0000"
                      className="text-base"
                      value={whatsappNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1.5 mt-4">
                  <Label
                    htmlFor="message"
                    className="text-base font-medium mb-2 text-gray-800"
                  >
                    {t("message")}
                    <span className="font-bold text-red-300">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <ToggleGroup type="multiple">
                      <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold
                          className="h-4 w-4"
                          onClick={() => applyFormat("*", "*")}
                        />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic"
                      >
                        <Italic
                          className="h-4 w-4"
                          onClick={() => applyFormat("_", "_")}
                        />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline"
                      >
                        <Strikethrough
                          className="h-4 w-4"
                          onClick={() => applyFormat("~", "~")}
                        />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="list" aria-label="Toggle list">
                        <List
                          className="h-4 w-4"
                          onClick={() => applyFormat("- ", "")}
                        />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="quote" aria-label="Toggle quote">
                        <Code2
                          className="h-4 w-4"
                          onClick={() => applyFormat("> ", "")}
                        />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="code" aria-label="Toggle code">
                        <Quote
                          className="h-4 w-4"
                          onClick={() => applyFormat("> ", "")}
                        />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <Textarea
                    className="text-sm w-full placeholder:text-sm"
                    rows={6}
                    placeholder="Digite a sua mensagem aqui..."
                    id="messageTextarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        setMessage((prev) => prev + "\n");
                      }
                    }}
                  />
                </div>
              </div>
            </form>
            <div className="flex flex-col w-[350px] gap-4 ">
              <Label className="text-base font-medium  text-gray-800">
                {t("preview")}
              </Label>
              <div className="flex border h-full text-sm rounded-md p-2">
                <div dangerouslySetInnerHTML={{ __html: previewMessage }}></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center p-6 pt-0">
            <Button
              className="font-semibold bg-red-500 hover:bg-red-600"
              onClick={() => clearFields()}
            >
              {t("clear")}
              <Eraser size={16} className="ml-2" />
            </Button>
            {/* <Button
              className="font-semibold"
              variant="default"
              onClick={() => generateLink()}
            >
              Preview
            </Button> */}
            <Button
              className="font-semibold bg-green-500 hover:bg-green-600"
              variant="default"
              onClick={() => generateLink()}
            >
              {t("generate")}
              <Copy size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZapCard;
