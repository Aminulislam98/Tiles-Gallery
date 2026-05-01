"use client";
import { Modal, Button } from "@heroui/react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LogoutModal({ isOpen, onClose }) {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    onClose();
    toast.success("Logged out!");
    router.push("/");
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-red-50 text-red-600">
                <RiLogoutBoxLine className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Sign out?</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <p className="text-sm text-center" style={{ color: "#8C8880" }}>
                You will need to sign in again to access your account.
              </p>
            </Modal.Body>

            <Modal.Footer className="flex gap-3">
              {/* Cancel — slot="close" auto closes modal */}
              <Button
                className="flex-1 font-semibold"
                slot="close"
                variant="secondary"
              >
                Cancel
              </Button>

              {/* Logout */}
              <Button
                className="flex-1 font-semibold text-white flex items-center gap-2"
                onPress={handleLogout}
                style={{ background: "#C0392B" }}
              >
                <RiLogoutBoxLine size={14} />
                Yes, sign out
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
