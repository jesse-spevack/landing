'use client'

import SignUpForm from "@/components/SignUpForm/SignUpForm";
import ThankYou from "@/components/ThankYou/ThankYou";
import { useState } from "react";

export default function Leads() {
  const [newLead, setNewLead] = useState(true)

  if (newLead) {
    return <SignUpForm setNewLead={setNewLead} />
  } else {
    return <ThankYou />
  }
}